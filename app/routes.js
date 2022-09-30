const { exchangeRates, isEmpty, isDuplicate } = require("../src/util.js");
const express = require("express");
const router = express.Router();

router.get("/rates", (req, res) => {
  return res.status(200).send(exchangeRates);
});

router.post("/currency", (req, res) => {
  if (!req.body.hasOwnProperty("name")) {
    return res.status(400).send({
      error: "Bad Request - missing required parameter NAME",
    });
  }
  if (typeof req.body.name !== "string" || req.body.name === "") {
    return res.status(400).send({
      error: "Bad Request: NAME should be a string or has values",
    });
  }
  if (!req.body.hasOwnProperty("ex")) {
    return res.status(400).send({
      error: "Bad Request - missing required parameter EX",
    });
  }
  if (typeof req.body.ex !== "object") {
    return res.status(400).send({
      error: "Bad Request: EX should be an object",
    });
  }
  if (isEmpty(req.body.ex)) {
    return res.status(400).send({
      error: "Bad Request: EX should have key value pairs",
    });
  }
  if (!req.body.hasOwnProperty("alias")) {
    return res.status(400).send({
      error: "Bad Request - missing required parameter ALIAS",
    });
  }
  if (typeof req.body.alias !== "string" || req.body.alias === "") {
    return res.status(400).send({
      error: "Bad Request: ALIAS should be an object or has values",
    });
  }
  if (!isDuplicate(req.body.alias, exchangeRates)) {
    return res.status(400).send({
      error: "Bad Request - Duplicated Alias",
    });
  }
  return res.status(200).send({
    message: "Currency is successfully added",
  });
});

module.exports = router;
