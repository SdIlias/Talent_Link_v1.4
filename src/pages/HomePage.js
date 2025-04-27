import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import StatsSection from '../components/StatsSection';
import TrustedCompanies from '../components/TrustedCompanies';

const HomePage = () => {
return (
    <div>
    <Header />
    <HeroSection />
    <StatsSection />
    <HowItWorks />
    <TrustedCompanies />
    <Footer />
    </div>
);
};

export default HomePage;