const cloudinary = require("cloudinary").v2;
require("dotenv").config(); // Call config() as a function

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadFile = async (data) => {
  const fileArray = Object.values(data);

  const results = [];
  for (const file of fileArray) {
    try {
      const uploadResult = await new Promise((res, rej) => {
        cloudinary.uploader
          .upload_stream((error, result) => {
            if (result) {
              res(result);
            }
            rej(error);
          })
          .end(file.data);
      });
      results.push(uploadResult);
      console.log("<<<<<<<upload Result", uploadResult);
    } catch (error) {
      console.error(`Error uploading file: ${file.name}`, error);
    }
  }

  return results;
};
