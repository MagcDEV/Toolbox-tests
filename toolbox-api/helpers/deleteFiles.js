const promisify = require("util").promisify;
const fs = require("fs");
const unlinkp = promisify(fs.unlink);

const deleteFiles = async (fileList) => {
  for (const file of fileList) {
    await unlinkp(`./files/${file}`);
  }
};

module.exports = { deleteFiles };
