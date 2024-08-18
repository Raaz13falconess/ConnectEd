const Application = require('../models/Application');
const multer = require('multer');
const path = require('path');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

exports.upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (extname) {
      return cb(null, true);
    } else {
      cb('PDFs only!');
    }
  },
}).single('resume');

exports.applyForJob = async (req, res) => {
  const { jobId } = req.params;

  try {
    const application = await Application.create({
      job: jobId,
      candidate: req.user._id,
      resume: req.file.path,
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId }).populate('candidate', 'name email');
    res.json(applications);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
