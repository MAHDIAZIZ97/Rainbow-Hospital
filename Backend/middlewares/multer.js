import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import path from 'path';




// handling jpg/png file
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

// handling pdf file

const pdfStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/pdfs'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const pdfFilter = (req, file, cb) => {
  const isPdf = path.extname(file.originalname).toLowerCase() === '.pdf';
  cb(null, isPdf);
};

const uploadPDF = multer({ storage: pdfStorage, fileFilter: pdfFilter });

export{upload, uploadPDF};