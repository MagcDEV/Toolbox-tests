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
  path: "/v1/secret/files", // we changed the path to only grab one post
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: "Bearer aSuperSecretKey",
  },
};

app.get("/files/data", (req, res) => {
  (async () => {
    try {
      let data = "";
      const fileList = await getFileList(options, data);

      const urls = getFileURLS(
        fileList,
        "https://echo-serv.tbxnet.com/v1/secret/file/"
      );
      const requests = createDownloadRequests(urls);

      const value = await Promise.all(requests);

      const validFileList = await getValidFiles(value);

      const respuesta = createResponse(validFileList);

      return res.send(respuesta);
    } catch (err) {
      console.log(err);
    }
  })();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
