// MyApplications.js
import React from "react";
import styled from "styled-components";

const MyApplications = () => {
  const applications = [
    {
      enterprise: "Microsoft Corporation, Inc.",
      discipline: "Cloud Solution Architecture",
      roleType: "Individual Contributor",
      jobNumber: "177538",
      employmentType: "Full-Time",
      workSite: "Up to 50% work from home",
      status: "IN PROGRESS",
      isApproved: false,
    },
    {
      enterprise: "HashiCorp, Inc.",
      discipline: "Cloud Solution Architecture",
      roleType: "Individual Contributor",
      jobNumber: "421195",
      employmentType: "Full-Time",
      workSite: "Up to 30% work from home",
      status: "APPROVED",
      isApproved: true,
    },
    {
      enterprise: "Unity Software Inc.",
      discipline: "Game Development",
      roleType: "Group Contributor",
      jobNumber: "195602",
      employmentType: "Full-Time",
      workSite: "Up to 50% work from home",
      status: "REJECTED",
      isApproved: false,
    },
  ];

  return (
    <MyApplicationsContainer>
      <Title>MY APPLICATIONS</Title>
      {applications.map((app, index) => (
        <Application
          key={index}
          status={app.status}
        >
          <ApplicationContent>
            <LeftColumn>
              <ApplicationDetail>
                <strong>Job number:</strong> {app.jobNumber}
              </ApplicationDetail>
              <ApplicationDetail>
                <strong>Employment type:</strong> {app.employmentType}
              </ApplicationDetail>
              <ApplicationDetail>
                <strong>Work site:</strong> {app.workSite}
              </ApplicationDetail>
            </LeftColumn>
            <RightColumn>
              <ApplicationDetail>
                <strong>Enterprise:</strong> {app.enterprise}
              </ApplicationDetail>
              <ApplicationDetail>
                <strong>Discipline:</strong> {app.discipline}
              </ApplicationDetail>
              <ApplicationDetail>
                <strong>Role type:</strong> {app.roleType}
              </ApplicationDetail>
            </RightColumn>
          </ApplicationContent>
          <ApplicationFooter>
            <Status status={app.status}>
              <strong>Status:</strong> {app.status}
            </Status>
            <AcceptButton isApproved={app.isApproved} disabled={!app.isApproved}>
              Accept
            </AcceptButton>
          </ApplicationFooter>
        </Application>
      ))}
    </MyApplicationsContainer>
  );
};

const MyApplicationsContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  width: 60%;
  padding-left: 20%;
      @media (max-width: 768px) {
           width: 90%;
          padding-left: 5%;
        }
`;

const Title = styled.h2`
  text-align: center;
  color: #011850;
  margin-bottom: 20px;
`;

const Application = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #f9f9f9;

  ${(props) => {
    if (props.status === "APPROVED") {
      return `border-color: #4caf50;`;
    } else if (props.status === "REJECTED") {
      return `border-color: #e74c3c;`;
    }
  }}
`;

const ApplicationContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
    flex-wrap : wrap;
    @media (max-width: 768px) {
         flex-direction : column;
        }

`;

const LeftColumn = styled.div`
  width: 48%;
     @media (max-width: 768px) {
          width: 100%;
          margin-bottom : 10px;
        }
`;

const RightColumn = styled.div`
  width: 48%;
    @media (max-width: 768px) {
         width: 100%;
         margin-bottom : 10px;
        }
`;

const ApplicationDetail = styled.div`
  margin: 5px 0;
`;

const ApplicationFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 300px;
    flex-wrap : wrap;
      @media (max-width: 768px) {
        flex-direction : column;
          gap : 10px;
        }
`;

const Status = styled.div`
  font-weight: bold;
  ${(props) => {
      if (props.status === "IN PROGRESS") {
          return `
            color: #ff9800;
            strong {
              color: #1791DA;
            }
          `;
      } else if (props.status === "APPROVED") {
          return `
            color: #4caf50;
             strong {
              color: #1791DA;
            }
          `;
      } else if (props.status === "REJECTED") {
          return `
            color: #e74c3c;
              strong {
              color: #1791DA;
            }
          `;
      }
  }}
`;

const AcceptButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;

  ${(props) =>
    props.isApproved
      ? `
    background-color: #011850;
    color: white;
  `
      : `
    background-color: #ddd;
    color: #999;
    cursor: not-allowed;
  `}
`;


export default MyApplications;