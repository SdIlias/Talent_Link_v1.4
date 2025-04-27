// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div style={{ textAlign: 'center', padding: '16px' }} >
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{ marginRight: '8px',backgroundColor: '#007bff',
          color: 'white',
          padding: '5px 5px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: 'bold',
          cursor: 'pointer', }}
      >
        Prev Page
      </button>
      <span style={{ margin: '0 20px', fontWeight: 'bold' }}> Page {currentPage} of {totalPages} </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ backgroundColor: '#007bff',
          color: 'white',
          padding: '5px 5px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginLeft: '8px'

           }}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;