const fs = require("fs");

const createFolder = () => {
  const folderName = "./files";
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
};
module.exports = { createFolder };
