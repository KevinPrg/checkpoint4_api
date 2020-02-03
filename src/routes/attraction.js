const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const connection = require("../config");

const router = express.Router({
  mergeParams: true
});

router.get("/", (req, res) => {
  connection.query("SELECT * FROM attraction", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  const formData = req.params.id;
  connection.query(
    "SELECT * FROM attraction WHERE idattraction = ?",
    [formData],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    }
  );
});

router.post("/new", (req, res) => {
  const formData = req.body;
  console.log(formData);
  connection.query("INSERT INTO attraction SET ?", formData, err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
