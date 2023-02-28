const { download } = require("./download");

const createDownloadRequests = (urls) => {
  const requests = [];
  for (const url of urls) {
    let urlObj = new URL(url);
    let parts = urlObj.pathname.split("/");
    let filename = parts[parts.length - 1];
    requests.push(download(url, `files/${filename}`));
  }
  return requests;
};

module.exports = { createDownloadRequests };
