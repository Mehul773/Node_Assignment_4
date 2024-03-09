const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  // Display form for creating user and navigation links
  res.render("createUser", { heading: "Create User" });
});

module.exports = router;
