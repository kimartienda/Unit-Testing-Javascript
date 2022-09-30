const chai = require("chai");
const { assert } = require("chai");
const http = require("chai-http");
chai.use(http);

describe("Currency Test Suite", () => {
  it("API currency endpoint is running", (done) => {
    chai
      .request("http://localhost:5001")
      .get("/forex/currency")
      .end((err, res) => {
        assert.isDefined(res);
        done();
      });
  });
  it("Test currency post if it returns 400 if no name property", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "nuyen",
        ex: {
          peso: 0.47,
          usd: 0.0092,
          won: 10.93,
          yuan: 0.065,
        },
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if name is not a string", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "nuyen",
        name: 123,
        ex: {
          peso: 0.47,
          usd: 0.0092,
          won: 10.93,
          yuan: 0.065,
        },
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if name is an empty string", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "nuyen",
        name: "",
        ex: {
          peso: 0.47,
          usd: 0.0092,
          won: 10.93,
          yuan: 0.065,
        },
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if no ex property", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "nuyen",
        name: "Shadowrun Nuyen",
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if ex property is not an object", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "nuyen",
        ex: "peso",
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if ex property is an empty object", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "nuyen",
        name: "Shadowrun Nuyen",
        ex: {},
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if no alias property", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        name: "Shadowrun Nuyen",
        ex: {
          peso: 0.47,
          usd: 0.0092,
          won: 10.93,
          yuan: 0.065,
        },
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if alias is not a string", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: 123,
        name: "Shadowrun Nuyen",
        ex: {
          peso: 0.47,
          usd: 0.0092,
          won: 10.93,
          yuan: 0.065,
        },
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if alias is empty", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "",
        name: "Shadowrun Nuyen",
        ex: {
          peso: 0.47,
          usd: 0.0092,
          won: 10.93,
          yuan: 0.065,
        },
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 400 if there is a duplicate alias", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "php",
        name: "Philippine Peso",
        ex: {
          usd: 0.02,
          won: 23.39,
          yen: 2.14,
          yuan: 0.14,
        },
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });
  it("Test currency post if it returns 200", (done) => {
    chai
      .request("http://localhost:5001")
      .post("/forex/currency")
      .type("json")
      .send({
        alias: "baht",
        name: "Thai Baht",
        ex: {
          peso: 1.55,
          won: 37.69,
          yen: 3.79,
          yuan: 0.19,
        },
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });
});
