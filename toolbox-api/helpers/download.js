const https = require("https");
const fs = require("fs");

const download = (url, destPath) => {
  return new Promise((resolve, reject) => {
    https.get(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer aSuperSecretKey",
        },
      },
      (res) => {
        const { statusCode } = res;
        if (statusCode === 200) {
          const filePath = fs.createWriteStream(destPath);
          res.pipe(filePath);
          resolve(true);
        }
        resolve(false);
        // reject(null);
      }
    );
  });
};

module.exports = { download };
