const promisify = require('util').promisify;
const fs = require('fs');
const readdirp = promisify(fs.readdir);

const getValidFiles = async (value) => {
  let files = await readdirp("./files/");
  return files;
};

module.exports = { getValidFiles };
