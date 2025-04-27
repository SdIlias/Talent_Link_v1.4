import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeroSectionA = () => {
    return (
        <HeroSection>
            <HeroContent>
                <HeroTitle>
                    JOB <br />
                    <Highlight>INTERNSHIP</Highlight>
                </HeroTitle>
                <HeroParagraph>
                    Discover the best internship opportunities tailored to your skills and ambitions.
                    Connect with top companies, build real-world experience, and take the first step
                    toward a successful future.
                </HeroParagraph>
                <Link to="/studentjobs">
                    <ApplyButton>Apply to offers</ApplyButton>
                </Link>
            </HeroContent>
            <HeroImage>
                <img src="../images/studentdash.png" alt="Internship Illustration" />
            </HeroImage>
        </HeroSection>
    );
};

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const HeroContent = styled.div`
  max-width: 50%;
  padding-left: 50px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #011850;
`;

const Highlight = styled.span`
  color: #1791DA;
`;

const HeroParagraph = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 2rem;
  width: 90%;
`;

const ApplyButton = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #011850;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 25%;
      &:hover {
        background-color: #1791DA;
      }
`;


const HeroImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export default HeroSectionA;