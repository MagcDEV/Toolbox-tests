const express = require("express");
const { createDownloadRequests } = require("./helpers/createDownloadRequests");
const app = express();
const { getFileList } = require("./helpers/getFileList");
const { getFileURLS } = require("./helpers/getFileURLS");
const fs = require("fs");
const { createResponse } = require("./helpers/createResponse");
const { getValidFiles } = require("./helpers/getValidFiles");
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
      console.log(req.query.fileName);
      const fileList = await getFileList(options, "", false, req.query.fileName);

      const urls = getFileURLS(
        fileList,
        "https://echo-serv.tbxnet.com/v1/secret/file/"
      );
      console.log("list of files fectched");

      const requests = createDownloadRequests(urls);

      const value = await Promise.all(requests);

      console.log("all files dowloaded");

      const validFileList = await getValidFiles(value);

      const respuesta = createResponse(validFileList);


      return res
        .set({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        })
        .send(JSON.stringify(respuesta));
    } catch (err) {
      console.log(err);
    }
  })();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
