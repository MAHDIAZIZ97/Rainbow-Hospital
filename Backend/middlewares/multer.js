import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import path from 'path';


// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: async (req, file) => {
//         if (!file || !file.mimetype) {
//             throw new Error("Invalid file or file type is missing.");
//         }

//         let folder = "uploads"; // Default folder
//         let format = file.mimetype.split("/")[1] || "raw"; // Extract file extension safely

//         // Handle different file types
//         if (file.mimetype === "application/pdf") {
//             folder = "pdf_uploads";
//             format = "pdf";
//         } else if (file.mimetype.startsWith("image/")) {
//             folder = "image_uploads";
//         }

//         return {
//             folder: folder,
//             format: format, // Use extracted format
//             public_id: file.originalname ? file.originalname.split(".")[0] : Date.now().toString(), // Use timestamp as fallback
//         };
//     },
// });

const storage = multer.diskStorage({
    filename: function(req,file,callback){
        callback(null,file.originalname);
    },
    destination: "public/uploads/", 
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); 
    },
});

const upload = multer({storage});

export default upload;