import React from 'react';
import Head from '../components/Head';
import HeroSectionA from '../components/HeroSectionA';
import MyApplications from '../components/MyApplications';
import ApplicationsHistory from '../components/ApplicationsHistory';

const StudentDashboard = () => {
return (
    <div>
    <Head />
    <HeroSectionA />
    <MyApplications />
    <ApplicationsHistory />
    </div>
);
};

export default StudentDashboard;