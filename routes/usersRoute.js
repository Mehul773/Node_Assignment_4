const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");

router.get("/users", async (req, res) => {
  try {
    // Read user data from file
    const data = await fs.readFile("users.txt", "utf8");
    const users = data.split("\n").filter(Boolean);
    if (users.length === 0) {
      // Redirect to create page if no users
      res.redirect("/");
      return;
    }
    // Display users and navigation links
    res.render("users", { users: users });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
