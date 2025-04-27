import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
    return (
        <Hero>
            <HeroContent>
                <HeroTitle>
                    Empowering Connections Between Talented Students And Top Employers.
                </HeroTitle>
                <HeroSubtitle>
                    Seamlessly Matching The Right Skills With The Right Opportunities.
                </HeroSubtitle>
                <HeroButton>Sign Up</HeroButton>
            </HeroContent>
            <HeroImage>
                <img src="../images/good_deal-removebg-preview.png" alt="Handshake Illustration" />
            </HeroImage>
        </Hero>
    );
};

const Hero = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: #011850;
    color: white;
    min-height: 300px;

     @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
        text-align: center;
    }
`;

const HeroContent = styled.div`
    max-width: 50%;

    @media (max-width: 768px) {
      max-width: 100%;
    }
`;

const HeroTitle = styled.h3`
    font-size: 2.5rem;
    font-weight: bold;
    color: #1791DA;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 10px;
    }
`;

const HeroSubtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 20px;
    }
`;

const HeroButton = styled.button`
    padding: 15px 30px;
    margin-left: 200px;
    background-color: white;
    color: #002855;
    border: 2px solid white;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bolder;
    cursor: pointer;
    font-size: larger;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #011850;
        color: white;
        border: 1px solid white;
    }


    @media (max-width: 768px) {
        margin-left: 0;
        padding: 12px 24px;
        font-size: 1rem;
    }
`;

const HeroImage = styled.div`
    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
      max-width: 70%;
      margin-top: 20px;
    }
`;

export default HeroSection;