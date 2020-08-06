"use strict";

var express = require("express");
var router = express.Router();
var model = require("../models/index");

router.get("/chartMainNvoContract/:project_code", function (req, res) {
  try {
    let params = req.params;
    model.monitoring_vo
      .findAll({
        attributes: [
          [
            model.sequelize.fn(
              "sum",
              model.sequelize.col("amount_main_contract")
            ),
            "amount_main_contract",
          ],
          [
            model.sequelize.fn(
              "sum",
              model.sequelize.col("bill_main_contract")
            ),
            "bill_main_contract",
          ],
          [
            model.sequelize.fn(
              "sum",
              model.sequelize.col("amount_contract_vo")
            ),
            "amount_contract_vo",
          ],
          [
            model.sequelize.fn("sum", model.sequelize.col("bill_vo")),
            "bill_vo",
          ],
        ],
        where: params,
      })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json(JSON.stringify(error));
      });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json(JSON.stringify(error));
  }
});

router.get("/totalContractNpotVO/:project_code", function (req, res) {
  try {
    let params = req.params;
    model.monitoring_vo
      .findAll({
        attributes: ["total_billing", "total_contract", "potential_vo"],
        limit: 1,
        where: params,
      })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json(JSON.stringify(error));
      });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json(JSON.stringify(error));
  }
});

router.get("/detail/:project_code", function (req, res) {
  try {
    let params = req.params;
    model.monitoring_vo
      .findAll({
        attributes: { exclude: ["id", "created_date"] },
        where: params,
      })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json(JSON.stringify(error));
      });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json(JSON.stringify(error));
  }
});

router.get("/project", function (req, res) {
  try {
    model.monitoring_vo
      .findAll({
        attributes: ["project_code", "project_name"],
        group: ["project_code", "project_name"],
        order: [["project_name", "asc"]],
      })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json(JSON.stringify(error));
      });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json(JSON.stringify(error));
  }
});
module.exports = router;
