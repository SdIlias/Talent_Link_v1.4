// MainContainer.js
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import JobList from "./JobList";
import Pagination from "./Pagination";

const MainContainer = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [filters, setFilters] = useState({
        searchTerm: "",
        location: "",
        category: "",
        salaryMin: null,
        salaryMax: null,
    });


  const RESULTS_PER_PAGE = 6;


  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9c650eb5&app_key=6ef4af346af8ef1b743c3959d96f5eb6&results_per_page=50&content-type=application/json`
      );
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const result = await response.json();

      setJobs(result.results);
      applyFilters(result.results, filters);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

    const applyFilters = (data, filters) => {
        const { searchTerm, location, category, salaryMin, salaryMax } = filters;

        const filtered = data.filter((job) => {
            const titleMatch = !searchTerm || job.title.toLowerCase().includes(searchTerm.toLowerCase());
            const locationMatch = !location || job.location.display_name.toLowerCase().includes(location.toLowerCase());
            const categoryMatch = !category || job.category.label === category;
            const salaryMinMatch = salaryMin == null || (job.salary_min && job.salary_min >= salaryMin);
            const salaryMaxMatch = salaryMax == null || (job.salary_max && job.salary_max <= salaryMax);


            return titleMatch && locationMatch && categoryMatch && salaryMinMatch && salaryMaxMatch;
        });

        setFilteredJobs(filtered);
        paginateResults(filtered, 1);
    };


  const paginateResults = (data, page) => {
    const start = (page - 1) * RESULTS_PER_PAGE;
    const end = start + RESULTS_PER_PAGE;
    setDisplayedJobs(data.slice(start, end));
    setTotalPages(Math.ceil(data.length / RESULTS_PER_PAGE));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    paginateResults(filteredJobs.length ? filteredJobs : jobs, page);
  };

    const handleSearch = (newFilters) => {
        setFilters(newFilters);
        applyFilters(jobs, newFilters);
        setCurrentPage(1);
    };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: '#F0F8FF' }}>
        <SearchBar onSearch={handleSearch} jobs={jobs} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && <JobList jobs={displayedJobs} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MainContainer;