// import { Request } from "express";
// import multer from "multer";
// import multerS3 from "multer-s3";
// import { S3Client } from "@aws-sdk/client-s3";
// import { v4 as makeId } from "uuid";

// const s3Client = new S3Client({
//      endpoint: `https://${process.env.ENDPOINT_S3}`,
//      region: process.env.BUCKET_REGION,
//      credentials: {
//        accessKeyId: process.env.KEY_ID || "",
//        secretAccessKey: process.env.APP_KEY || "",
//      }
//    });
   
// let url = "";
// const upload = multer({
     
//   storage: multerS3({
//      s3: s3Client,
//      bucket: process.env.BUCKET_NAME || "",
//      acl: 'public-read',
//      key: function (req: Request, file, cb) {
//      const serial = makeId();
//      url = `https://${process.env.BUCKET_NAME}.s3.us-east-005.backblazeb2.com/produtos/${serial}-${file.originalname}`;
//      cb(null, `produtos/${serial}-${file.originalname}`);
     
//     },

//   }),
  
// });

// export {
//   upload
// }

import { Express } from "express";
import s3Client from "../config/aws-sdk-s3";
import { PutObjectCommand, DeleteObjectCommand } from"@aws-sdk/client-s3";


const uploadFile = async (dir: string, file: Express.Multer.File) => {
    const command = new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: `${dir}/${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
    });

    const response = await s3Client.send(command); 

    if (response["$metadata"].httpStatusCode !== 200) {
        return null;
    }

    const url = `https://${process.env.BUCKET_NAME}.s3.us-east-005.backblazeb2.com/${dir}/${file.originalname}`;

    return url;
};

const deleteFile = async (filePath: string) => {
    const command = new DeleteObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: filePath,
    });

    const response = await s3Client.send(command);
    console.log(response);
    

    if (response["$metadata"].httpStatusCode !== 204) {
        return null;
    }

    return 1;
};

export { uploadFile, deleteFile };
