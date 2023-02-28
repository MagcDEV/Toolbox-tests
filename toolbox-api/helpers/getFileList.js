const http = require("http");

const getFileList = (options, data) => {
  return new Promise((resolve, reject) => {

    const request = http.request(options, (response) => {
      // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
      response.setEncoding("utf8");

      // As data starts streaming in, add each chunk to "data"
      response.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      response.on("end", () => {
        resolve(JSON.parse(data).files);
        // const fileNames = JSON.parse(data).files;
        // return fileNames;
        //   res.send(data);
      });
    });

    // Log errors if any occur
    request.on("error", (error) => {
      reject(error);
    });

    // End the request
    request.write(data);
    request.end();
  });
};

module.exports = { getFileList };
