const getFileURLS = (fileList, baseUrl) => {
    const urls = [];

    fileList.map((name) => {
        urls.push(baseUrl + name)
    })

    return urls;

}

module.exports = { getFileURLS };