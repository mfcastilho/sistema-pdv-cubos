import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    endpoint: `https://${process.env.ENDPOINT_S3}`,
    region: process.env.BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.KEY_ID || "",
        secretAccessKey: process.env.APP_KEY || "",
    }
});

export default s3Client;
