// JobSearch.js
import React, { useState, useEffect } from 'react';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9c650eb5&app_key=6ef4af346af8ef1b743c3959d96f5eb6&results_per_page=50&content-type=application/json');
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setJobs(result.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const truncateDescription = (description) => {
    const lines = description.split('. ').slice(0, 4).join('. ');
    return `${lines}${description.split('. ').length > 4 ? '...' : ''}`;
  };

  return (
    <div style={{padding : '16px'}}>
      <h1>Job Listings</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && jobs.length === 0 && <p>No jobs found.</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {jobs.map((job) => (
          <div
            key={job.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              flex: '1 1 calc(33.333% - 16px)',
              maxWidth: 'calc(33.333% - 16px)',
              boxSizing: 'border-box',
              backgroundColor: '#f9f9f9',
                '@media (max-width: 768px)': {
                flex: '1 1 calc(100% - 16px)',
                maxWidth: 'calc(100% - 16px)',
                  }
            }}
          >
            <h2>{job.title}</h2>
            <p>
              <strong>Company:</strong> {job.company.display_name}
            </p>
            <p>
              <strong>Location:</strong> {job.location.display_name}
            </p>
            <p>
              <strong>Category:</strong> {job.category.label}
            </p>
            <p>
              <strong>Salary:</strong> £{job.salary_min?.toFixed(2)} - £
              {job.salary_max?.toFixed(2)}
            </p>
            <p>
              <strong>Contract:</strong> {job.contract_time || 'N/A'}
            </p>
            <p>
              <strong>Description:</strong>{' '}
              {truncateDescription(job.description)}
            </p>
            <a
              href={job.redirect_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#007bff', textDecoration: 'none' }}
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default JobSearch;