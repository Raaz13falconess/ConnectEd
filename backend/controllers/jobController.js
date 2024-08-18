const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, description } = req.body;

  try {
    const job = await Job.create({
      title,
      description,
      company: req.user._id,
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('company', 'name');
    res.json(jobs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
