// JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  const truncateDescription = (description) => {
    const lines = description.split('. ').slice(0, 4).join('. ');
    return `${lines}${description.split('. ').length > 4 ? '...' : ''}`;
  };

  return (
    <div>
      <h3 style={{textAlign: 'center', color: '#011850'}}>{job.title}</h3>
      <p><strong>Company:</strong> {job.company.display_name}</p>
      <p style={{ marginBottom: '-4px'}}><strong>Location:</strong> {job.location.display_name}</p>
      <p><strong>category:</strong> {job.category.label}</p>
      <p><strong>Salary:</strong> £{job.salary_min?.toFixed(2)} - £{job.salary_max?.toFixed(2)}</p>
      <p><strong>Contract:</strong> {job.contract_time}</p>


      <p><strong>Description:</strong> {truncateDescription(job.description)}</p>
      <a href={job.redirect_url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
        See details
      </a>
    </div>
  );
};

export default JobCard;