const express = require("express");
const { getFilteredJobs } = require("../controller/jobFilteredController");

const router = express.Router();
router.get("/", getFilteredJobs);
module.exports = router;
