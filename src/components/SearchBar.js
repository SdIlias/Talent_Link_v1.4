// SearchBar.js
import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, jobs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
    const [salaryMin, setSalaryMin] = useState('');
    const [salaryMax, setSalaryMax] = useState('');


  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    if (jobs) {
      const uniqueCategories = [...new Set(jobs.map(job => job.category.label))];
      setAvailableCategories(uniqueCategories);
    }
  }, [jobs]);

  const handleSearch = () => {
      const filters = {
          searchTerm: searchTerm.trim(),
          location: location.trim(),
          category: category,
          salaryMin: salaryMin ? parseFloat(salaryMin) : null,
          salaryMax: salaryMax ? parseFloat(salaryMax) : null,
      };
    onSearch(filters);
  };

    const handleReset = () => {
        setSearchTerm('');
        setLocation('');
        setCategory('');
        setSalaryMin('');
        setSalaryMax('');
        onSearch({
            searchTerm: '',
            location: '',
            category: '',
            salaryMin: null,
            salaryMax: null,
        });
    }


  return (
    <div style={{
        backgroundColor: '#87D3F8',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    }}>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center',flexWrap: 'wrap' }}>
          <input
              type="text"
              placeholder="Search by job title, ID, or keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                  flex: 2,
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  minWidth: '150px',
              }}
          />
        <input
          type="text"
          placeholder="City, state, or country/region"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            minWidth: '150px',
          }}
        />
          <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px',minWidth: '120px' }}>
              <option value="">All Categories</option>
              {availableCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
              ))}
          </select>
          <input
              type="number"
              placeholder="Min Salary"
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
              style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  width: '120px',
              }}
          />
          <input
              type="number"
              placeholder="Max Salary"
              value={salaryMax}
              onChange={(e) => setSalaryMax(e.target.value)}
              style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  width: '120px'
              }}
          />

        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
        <button onClick={handleReset}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
        >
            Reset
        </button>
      </div>

    </div>
  );
};

export default SearchBar;