const express = require('express')
const router = express.Router()
const applicationsController = require('../controller/applicationController')
const verifyJWT = require('../middleware/verifyJWT')
const authorizeRole = require('../middleware/authorizeRole');
const upload = require("../middleware/uploads");
const jobsController= require("../controller/jobsController")


router.use(verifyJWT)

router.post('/', upload.single("resume"), authorizeRole(['Developer']), applicationsController.applyJob);

// Developer checks their applications
router.get('/user/:userId',verifyJWT, authorizeRole(['Developer']), applicationsController.getUserApplications);
router.get('/employer/:id',verifyJWT, authorizeRole(['employer']), jobsController.getEmployerApplications);
router.get('/:id',verifyJWT, applicationsController.getApplicationDetails);
// Employer checks applications for their job
router.get('/job/:jobId', authorizeRole('employer'), applicationsController.getJobApplications);

// Employer updates application status (e.g., accept/reject)
router.patch('/:id', authorizeRole(['employer']), applicationsController.updateApplicationStatus);

module.exports = router;
