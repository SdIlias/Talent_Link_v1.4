import React from 'react';
import styled from 'styled-components';

const steps = [
  {
    number: '01',
    features: ['Create A Profile', 'Add Your Skills'],
  },
  {
    number: '02',
    features: ['Automatically Matched To Internships'],
  },
  {
    number: '03',
    features: ['Track Applications', 'Account Access'],
  },
];

const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <SectionTitle>
        3 Simple Steps <br />
        <TitleSpan>How Does It <Highlight>Work?</Highlight></TitleSpan>
      </SectionTitle>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard key={index}>
            <StepNumber>{step.number}</StepNumber>
            <StepFeatures>
              {step.features.map((feature, idx) => (
                <FeatureItem key={idx}>
                     <CheckIconImage 
                       src="../images/succes.png" 
                       alt="Check icon" 
                     /> 
                    {feature}
                </FeatureItem>
              ))}
            </StepFeatures>
          </StepCard>
        ))}
      </StepsContainer>
      <SignUpButton>Sign Up For Free</SignUpButton>
    </HowItWorksSection>
  );
};

const HowItWorksSection = styled.section`
  text-align: center;
  background-color: #011850;
  color: #fff;
  padding: 40px 20px;
    h2{
         color: #fff;
    }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #fff;
    @media (max-width: 768px) {
       font-size: 18px;
    }
`;
const TitleSpan = styled.span`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
      @media (max-width: 768px) {
       font-size: 40px;
    }
`;


const Highlight = styled.span`
  color: #1791DA;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const StepCard = styled.div`
  background-color: #1791DA;
  border-radius: 10px;
  padding: 20px;
  width: 220px;
  height: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-start;
  text-align: center;
  gap: 20px;
      @media (max-width: 768px) {
          width: 80%;
          height: auto;
          padding: 15px;
      }
`;

const StepNumber = styled.div`
  font-size: 80px;
  font-weight: bolder;
  margin: 0;
  color: #011850;
  background-color: #1791DA;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

        @media (max-width: 768px) {
            font-size: 60px;
            width: 60px;
            height: 60px;
        }
`;

const StepFeatures = styled.ul`
  list-style: none;
  font-weight: bolder;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
    font-size: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
    gap: 2px;

    @media (max-width: 768px) {
          font-size: 18px;
         margin-bottom: 10px;
    }
`;

const CheckIconImage = styled.img`
    width: 40px; /* Adjust the size as needed */
  height: 40px; /* Keep proportional to width */
  flex-shrink: 0; /* Prevent the image from shrinking */
  margin-top: -8px;
      @media (max-width: 768px) {
            width: 30px;
           height: 30px;
           margin-top: -5px;
        }
`;


const SignUpButton = styled.button`
  background-color: #fff;
  color: #011850;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
  &:hover {
      background-color: #011850;
      color: #fff;
    }

       @media (max-width: 768px) {
         font-size: 18px;
    }
`;


export default HowItWorks;