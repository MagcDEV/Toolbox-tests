const csvToJson = require("convert-csv-to-json");

const getLines = (filePath) => {
  let objectArray = csvToJson
    .formatValueByType()
    .fieldDelimiter(",")
    .getJsonFromCsv(filePath);

  let result = objectArray.filter((objeto) => {
    delete objeto.file;
    let arrayCheck = [];
    let keys = Object.keys(objeto);
    keys.forEach((element) => {
      arrayCheck.push(objeto[element]);
    });

    return !arrayCheck.includes("") && typeof arrayCheck[1] == "number";
  });

  return result;
};

module.exports = { getLines };
