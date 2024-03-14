const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Display form for creating user and navigation links
  res.render("createUser", { heading: "Create User" });
});

module.exports = router;
