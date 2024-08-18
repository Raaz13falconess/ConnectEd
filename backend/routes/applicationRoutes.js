const express = require('express');
const { applyForJob, getApplications, upload } = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddlware');
const router = express.Router();

router.post('/:jobId/apply', protect, upload, applyForJob);
router.get('/:jobId/applications', protect, getApplications);

module.exports = router;
