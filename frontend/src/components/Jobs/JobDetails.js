import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const JobDetails = ({ match }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await api.get(`/jobs/${match.params.jobId}`);
      setJob(response.data);
    };

    fetchJob();
  }, [match.params.jobId]);

  return (
    job && (
      <div className="job-details">
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <p><strong>Company:</strong> {job.company.name}</p>
        <button onClick={() => window.location.href = `/apply/${job._id}`}>Apply</button>
      </div>
    )
  );
};

export default JobDetails;
