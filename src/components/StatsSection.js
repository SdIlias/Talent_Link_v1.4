import React from 'react';
import styled from 'styled-components';

const StatsSection = () => {
  const stats = [
    { number: '980', label: 'Student Job', icon: 'student-job-icon' },
    { number: '8,600', label: 'Internship', icon: 'internship-icon' },
    { number: '6,100', label: 'Company', icon: 'company-icon' },
  ];

  return (
    <StatsSectionContainer>
      {stats.map((stat, index) => (
        <StatBox key={index}>
          <StatIcon className={stat.icon} />
          <StatText>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatText>
        </StatBox>
      ))}
    </StatsSectionContainer>
  );
};

const StatsSectionContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #011850;
    padding: 50px;
    padding-top: 0;
    color: #fff;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
        gap: 30px;
        text-align: center;
    }
`;

const StatBox = styled.div`
    display: flex;
    align-items: center;
    max-width: 400px;
    text-align: left;

      @media (max-width: 768px) {
          flex-direction: column;
          align-items: center;
           max-width: 100%;
      }
`;

const StatIcon = styled.div`
    width: 100px;
    height: 100px;
    margin-right: 15px;
    background-size: cover;
    background-position: center;
    &.student-job-icon{
        background-image: url('../images/part-time.png');
    }
    &.internship-icon{
        background-image: url('../images/internships.png');
    }
     &.company-icon{
        background-image: url('../images/company.png');
    }

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
        margin-right: 0;
        margin-bottom: 10px;
    }
`;
const StatText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StatNumber = styled.h3`
    font-size: 24px;
    font-weight: bolder;
    font-size: xx-large;
    margin: 0;

     @media (max-width: 768px) {
         font-size: x-large;
    }
`;

const StatLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export default StatsSection;