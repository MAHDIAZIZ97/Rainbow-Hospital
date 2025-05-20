import validator from 'validator';
import bcrypt from 'bcrypt';
import staffModel from '../models/StaffModel.js';
import jwt from 'jsonwebtoken';


// change password

const changePassword = async (req, res) => {
    try {
        const {email,oldPassword, newPassword} = req.body;

        // Validate required fields
        if (!email ||!oldPassword ||!newPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const staffExist = await staffModel.findOne({email});
        if (!staffExist) {
            return res.status(400).json({ message: 'Staff not found' });
        }
        const isMatch = await bcrypt.compare(oldPassword, staffExist.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid old password' });
        }

        if(newPassword.length < 8 || validator.validatePassword(newPassword)){
            res.status(400).json({message: 'Minimum password length must be at least 8 characters and must contain at least one uppercase letter, one lowercase letter, one number and one special character'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        const staffData = new staffModel({
            password: hashedPassword,
        });

        await staffData.save();
        res.status(200).json({ success: true, message: 'Password changed successfully' });

    } catch (error) {
        console.error(error);
    }
}


const loginStaff = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Ensure both fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const staff = await staffModel.findOne({ email });
        if (!staff) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, staff.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

       
        const token = jwt.sign({ id: staff._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ success: true, token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export {
    changePassword,
    loginStaff
};