const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "http://localhost:3000";

describe("get all the files: ", () => {
  it("should get the content of all the csv files in json format ", (done) => {
    chai
      .request(url)
      .get("/files/data")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("should get the list of csv files", (done) => {
    chai
      .request(url_list)
      .get("/files/list")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

});
