const express = require('express');
const router = express.Router();
const jobsController = require('../controller/jobsController');
const verifyJWT = require('../middleware/verifyJWT');
const authorizeRole = require('../middleware/authorizeRole');
// Public route
router.get('/', jobsController.getAllJobs);

// Routes that require authentication
router.get('/:id',jobsController.getEmployerJobs);
router.post('/', verifyJWT, authorizeRole(['employer']), jobsController.createNewJob);
router.patch('/:id', verifyJWT, authorizeRole(['employer']), jobsController.updateJob);
router.delete('/:id', verifyJWT, authorizeRole(['employer']), jobsController.deleteJob);

module.exports = router;

