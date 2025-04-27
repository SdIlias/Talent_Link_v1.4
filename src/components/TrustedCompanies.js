import React, { useState } from 'react';
import styled from 'styled-components';

const TrustedCompanies = () => {
    const companies = [
        { name: 'Oracle', logo: '/images/oracle.png' },
        { name: 'Société Générale', logo: '/images/societegen.png' },
        { name: 'Microsoft', logo: '/images/microsoft.png' },
        { name: 'Oracle', logo: '/images/ibm.png' },
        { name: 'Itisalat', logo: '/images/cisco.png' },
        { name: 'Microsoft', logo: '/images/audi.png' },
        { name: 'Orange', logo: '/images/intel.png' },
        { name: 'Itisalat', logo: '/images/maroctel.png' },
        { name: 'Itisalat', logo: '/images/amd.png' },
         { name: 'Société Générale', logo: '/images/sony.png' },
        { name: 'Orange', logo: '/images/siemens.png' },
        { name: 'Orange', logo: '/images/orange.png' },
    ];

    const logosPerPage = 3;
    const totalPages = Math.ceil(companies.length / logosPerPage);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === companies.length - logosPerPage ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? companies.length - logosPerPage : prevIndex - 1
        );
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index * logosPerPage);
    };

    return (
        <TrustedCompaniesSection>
            <TitleTrusted>
                They Trusted <Highlight>TalentLink</Highlight>
            </TitleTrusted>
            <Carousel>
                <CarouselButton className="prev" onClick={handlePrev}>
                    <ArrowImage src="/images/less.png" alt='Previous'/>
                </CarouselButton>
                <CompaniesContainer>
                    {companies.slice(currentIndex, currentIndex + logosPerPage).map((company, index) => (
                        <CompanyLogo key={index}>
                            <LogoImage src={company.logo} alt={company.name} />
                        </CompanyLogo>
                    ))}
                </CompaniesContainer>
                 <CarouselButton className="next" onClick={handleNext}>
                      <ArrowImage src="/images/great.png" alt='Next'/>
                </CarouselButton>
            </Carousel>

            <CarouselIndicators>
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <Indicator
                        key={pageIndex}
                        active={pageIndex === Math.floor(currentIndex / logosPerPage)}
                        onClick={() => handleIndicatorClick(pageIndex)}
                    />
                ))}
            </CarouselIndicators>
        </TrustedCompaniesSection>
    );
};

const TrustedCompaniesSection = styled.section`
  text-align: center;
  background-color: #011850;
  color: white;
  padding: 40px 20px;
`;

const TitleTrusted = styled.h3`
  font-size: 60px;
  font-weight: bolder;
  margin-bottom: 20px;
      @media (max-width: 768px) {
        font-size: 40px;
    }
`;

const Highlight = styled.span`
  color: #00aaff;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const CarouselButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  &:hover {
    color: #00aaff;
  }
  &.prev {
    left: 15%;
  }
  &.next {
    right: 15%;
  }
    @media (max-width: 768px) {
          display: none;
    }
`;
const ArrowImage = styled.img`
  width: 30px;
  height: auto;
  @media (max-width: 768px) {
    width: 20px;
  }
`;

const CompaniesContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow: hidden;
  width: 600px;
  margin: 0 auto;
  justify-content: center; /* Center the logos */
      @media (max-width: 768px) {
          width: 90%;
           max-width: 400px; /* Added max-width for better control */
          gap: 10px;
           
    }
`;

const CompanyLogo = styled.div`
    flex: none;
    width: 180px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

     @media (max-width: 768px) {
          width: 100px;
         height: 70px;
    }
`;
const LogoImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const Indicator = styled.span`
  width: 12px;
  height: 12px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${props => props.active && `background-color: #00aaff;`}
`;

export default TrustedCompanies;