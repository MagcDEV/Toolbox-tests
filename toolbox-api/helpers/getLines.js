const { csvToJsonCustom } = require("./csvToJsonCustom");

const getLines = (filePath) => {
  // let objectArray = csvToJson
  //   .formatValueByType()
  //   .fieldDelimiter(",")
  //   .getJsonFromCsv(filePath);
  let objectArray = csvToJsonCustom(filePath);

  let result = objectArray.filter((objeto) => {
    delete objeto.file;
    let arrayCheck = [];
    let keys = Object.keys(objeto);
    keys.forEach((element) => {
      arrayCheck.push(objeto[element]);
    });

    return (
      !arrayCheck.includes("") &&
      typeof arrayCheck[1] == "number" &&
      !arrayCheck.includes(NaN) &&
      !arrayCheck.includes(undefined)
    );
  });

  return result;
};

module.exports = { getLines };
