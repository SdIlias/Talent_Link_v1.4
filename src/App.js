import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeDashboardpage from './pages/EmployeDashboardpage';
import EmployeProfile from './pages/EmployeProfile';
import HomePage from './pages/HomePage';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import StudentJobs from './pages/StudentJobs';
import EmployeJoboffer from './pages/EmployeJoboffer';
import EmployeApplications from './pages/EmployeApplications';



function App() {
 return (
     <Router>
     <Routes>
        <Route path="/employer" element={<EmployeDashboardpage />} /> 
        <Route path="/employeprofile" element={<EmployeProfile />} />
         <Route path="/" element={<HomePage />} />
         <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/studentjobs" element={<StudentJobs />} /> 
          <Route path="/joboffers" element={<EmployeJoboffer />} /> 
          <Route path="/empapps" element={<EmployeApplications />} /> 
          


     </Routes>
     </Router>
 );
}

export default App;