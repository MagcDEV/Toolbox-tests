const express = require("express");
const { createDownloadRequests } = require("./helpers/createDownloadRequests");
const app = express();
const { getFileList } = require("./helpers/getFileList");
const { getFileURLS } = require("./helpers/getFileURLS");
const fs = require("fs");
const { createResponse } = require("./helpers/createResponse");
const { getValidFiles } = require("./helpers/getValidFiles");
const { deleteFiles } = require("./helpers/deleteFiles");
const { csvToJsonCustom } = require("./helpers/csvToJsonCustom");
const { createFolder } = require("./helpers/createFolder");
const port = 3000;

const options = {
  hostname: "echo-serv.tbxnet.com",
  path: "/v1/secret/files",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: "Bearer aSuperSecretKey",
  },
};

app.get("/files/list", (req, res) => {
  (async () => {
    try {
      const fileList = await getFileList(options, "", true);
      return res
        .set({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        })
        .send(JSON.stringify(fileList));
    } catch (error) {
      console.log(error);
    }
  })();
});

app.get("/files/data", (req, res) => {
  (async () => {
    try {
      createFolder();
      const fileList = await getFileList(
        options,
        "",
        false,
        req.query.fileName
      );

      const urls = getFileURLS(
        fileList,
        "https://echo-serv.tbxnet.com/v1/secret/file/"
      );

      const requests = createDownloadRequests(urls);

      const value = await Promise.all(requests);

      const validFileList = await getValidFiles(value);

      const respuesta = createResponse(validFileList);

      const deletedFile = await deleteFiles(validFileList);
      
      return res
        .set({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        })
        .send(JSON.stringify(respuesta));
      // res.send('hello')
    } catch (err) {
      console.log(err);
    }
  })();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
