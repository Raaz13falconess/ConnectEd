import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const CompanyDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await api.get('/jobs');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  const fetchApplications = async (jobId) => {
    const response = await api.get(`/applications/${jobId}`);
    setApplications(response.data);
  };

  return (
    <div className="dashboard">
      <h2>Company Dashboard</h2>
      <div className="jobs">
        <h3>Your Job Postings</h3>
        {jobs.map((job) => (
          <div key={job._id} className="job">
            <h4>{job.title}</h4>
            <button onClick={() => fetchApplications(job._id)}>View Applications</button>
          </div>
        ))}
      </div>
      <div className="applications">
        <h3>Applications</h3>
        {applications.map((app) => (
          <div key={app._id} className="application">
            <p><strong>Applicant:</strong> {app.user.name}</p>
            <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
            <a href={`http://localhost:5000/${app.resumeUrl}`} target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDashboard;
