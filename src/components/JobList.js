// JobList.js
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';


const JobList = ({ jobs }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const jobListContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px',
    };



  const baseCardWrapperStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
        boxSizing: 'border-box',
        backgroundColor: '#e6f4ff'
    };



  return (
    <div style={jobListContainerStyle}>
      {jobs.map((job) => (
        <div
          key={job.id}
           className={isMobile ? 'mobile-job-card-wrapper' : 'desktop-job-card-wrapper'}

          style={baseCardWrapperStyle}

        >
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};


export default JobList;