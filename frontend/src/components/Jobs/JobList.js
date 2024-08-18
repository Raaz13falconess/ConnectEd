import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await api.get('/jobs');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-list">
      <h2>Job Openings</h2>
      {jobs.map((job) => (
        <div key={job._id} className="job">
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p><strong>Company:</strong> {job.company.name}</p>
          <button onClick={() => window.location.href = `/jobs/${job._id}`}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
