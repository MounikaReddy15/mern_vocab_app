const express = require("express");

const router = express.Router();

const usersController = require("../controllers/user");

router.post("/api/addword", usersController.addWord);

module.exports = router;
