const fs = require("fs");

const csvToJsonCustom = (filePath) => {
  // Read CSV
  let f = fs.readFileSync(filePath, { encoding: "utf-8" }, function (err) {
    console.log(err);
  });

  // Split on row
  f = f.split("\n");

  // Get first row for column headers
//   headers = f.shift().split(",");
  headers = ['file', 'text', 'number', 'hex'];

  let json = [];
  f.forEach(function (d) {
    // Loop through each row
    tmp = {};
    row = d.split(",");
    for (let i = 0; i < headers.length; i++) {
      tmp[headers[i]] = row[i];
    }
    // Add object to list
    json.push(tmp);
  });

  const newJson = json.map((line) => {
    return {
        file: line.file,
        text: line.text,
        number: parseInt(line.number),
        hex: line.hex
    }
  })

  return newJson;
};

module.exports = { csvToJsonCustom };
