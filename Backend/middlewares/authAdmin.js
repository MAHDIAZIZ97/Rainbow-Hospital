import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
    try {
        const {atoken} = req.headers;

        if(!atoken) {
            return res.status(401).json({success: false, message: 'Not properly authenticated'});
        }
        
        const decoded = jwt.verify(atoken, process.env.ADMIN_SECRET_KEY);

        if(decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({success: false, message: 'Not properly authenticated'});
        }
        next();
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

export {authAdmin}