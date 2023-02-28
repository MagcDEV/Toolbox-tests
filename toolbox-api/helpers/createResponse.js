const { getLines } = require("./getLines");

const createResponse =  (validFileList = []) => {
  let respuesta = validFileList.map((file) => {
    return {
      file: file,
      lines:  getLines(`files/${file}`),
    };
  });

  return respuesta.filter((elemento) => {
    return elemento.lines.length != 0;
  });

};

module.exports = { createResponse };
