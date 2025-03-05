import validator from 'validator';
import bcrypt from 'bcrypt';
import staffModel from '../models/StaffModel.js';


// change password

const changePassword = async (req, res) => {
    try {
        const {staffName,oldPassword, newPassword} = req.body;

        // Validate required fields
        if (!staffName ||!oldPassword ||!newPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const staffExist = await staffModel.findOne({staffName});
        if (!staffExist) {
            return res.status(400).json({ message: 'Staff not found' });
        }
        const isMatch = await bcrypt.compare(oldPassword, staffExist.staffPassword);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid old password' });
        }

        if(newPassword.length < 8 || validator.validatePassword(newPassword)){
            res.status(400).json({message: 'Minimum password length must be at least 8 characters and must contain at least one uppercase letter, one lowercase letter, one number and one special character'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        const staffData = new staffModel({
            staffPassword: hashedPassword,
        });

        await staffData.save();
        res.status(200).json({ success: true, message: 'Password changed successfully' });

    } catch (error) {
        console.error(error);
    }
}

export {changePassword};