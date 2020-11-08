import { Request, Response, NextFunction } from 'express';
import * as multer from 'multer';

// Configure Storage
const storage = multer.diskStorage({

    // Setting directory on disk to save uploaded files
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },

    // Setting name of file saved
    filename: function (req, file, cb) {
        const filename = file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop();
        req.body.image = filename;
        cb(null, filename)
    }
   
})

export const upload = multer({
    storage: storage,
    limits: {
        // Setting Image Size Limit to 2MBs
        fileSize: 2000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            //Error 
            cb(new Error('Please upload JPG and PNG images only!'))
        }
        //Success 
        cb(undefined, true)
    }
})