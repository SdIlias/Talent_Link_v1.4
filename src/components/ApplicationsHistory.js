// ApplicationsHistory.js
import React, { useState } from "react";
import styled from "styled-components";

const ApplicationsHistory = () => {
    const [expandedRow, setExpandedRow] = useState(3);

    const applications = [
        {
            id: 1,
            enterprise: "Intel Inc.",
            status: "REJECTED",
            datePosted: "Nov 29, 2024",
            jobNumber: "195601",
            discipline: "Hardware Engineering",
            employmentType: "Full-Time",
        },
        {
            id: 2,
            enterprise: "Oracle Inc.",
            status: "REJECTED",
            datePosted: "Nov 28, 2024",
            jobNumber: "195602",
            discipline: "Software Development",
            employmentType: "Full-Time",
        },
        {
            id: 3,
            enterprise: "Google Inc.",
            status: "REJECTED",
            datePosted: "Nov 29, 2024",
            jobNumber: "195603",
            discipline: "Game Development",
            employmentType: "Full-Time",
        },
    ];

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <ApplicationsHistoryContainer>
            <Title>APPLICATIONS HISTORY</Title>
            <ApplicationsList>
                {applications.map((app) => (
                    <ApplicationRow
                        key={app.id}
                        expanded={expandedRow === app.id}
                    >
                        <RowHeader onClick={() => toggleRow(app.id)}>
                            <ArrowIcon>
                                {expandedRow === app.id ? <img className="user-avatar" src="../../images/blackarrowright.png" alt="User Avatar" /> : <img className="user-avatar" src="../../images/blackarrow.png" alt="User Avatar" />}
                            </ArrowIcon>
                            <span>
                                <strong>Enterprise:</strong> {app.enterprise}
                            </span>
                            <Status rejected={app.status === "REJECTED"}>
                                <strong>Status:</strong> {app.status}
                            </Status>
                        </RowHeader>
                        {expandedRow === app.id && (
                            <RowDetails>
                                <div>
                                    <strong>Date posted:</strong> {app.datePosted}
                                </div>
                                <div>
                                    <strong>Job number:</strong> {app.jobNumber}
                                </div>
                                <div>
                                    <strong>Discipline:</strong> {app.discipline}
                                </div>
                                <div>
                                    <strong>Employment type:</strong> {app.employmentType}
                                </div>
                            </RowDetails>
                        )}
                    </ApplicationRow>
                ))}
            </ApplicationsList>
        </ApplicationsHistoryContainer>
    );
};

// Styled Components
const ApplicationsHistoryContainer = styled.div`
    font-family: Arial, sans-serif;
    margin: 20px;
    padding: 20px;
     @media (max-width: 768px) {
         margin: 10px;
         padding: 10px;
        }
`;

const Title = styled.h2`
    text-align: center;
    color: #011850;
    margin-bottom: 20px;
`;
const ArrowIcon = styled.div`
    margin-right: 10px;
    font-size: 18px;
    cursor: pointer;
  .user-avatar{
    width: 20px;
    height: 20px;
      color: #011850;
  }
`;

const ApplicationsList = styled.div`
    border: 1px solid #011850;
    border-radius: 8px;
    overflow: hidden;
`;

const ApplicationRow = styled.div`
    border-bottom: 1px solid #011850;
    padding: 10px 15px;
    cursor: pointer;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
    display: flex;
    flex-direction: column;

    &:hover {
        background-color: #1791DA;
    }

    ${(props) =>
        props.expanded &&
        `
      background-color: #f9f9f9;
    `}
`;

const RowHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
      flex-wrap : wrap;
  strong{
    color: #011850;
  }
`;

const Status = styled.span`
    font-weight: bold;
    color: ${(props) => (props.rejected ? "#e74c3c" : "inherit")};
`;

const RowDetails = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 14px;
    background-color: #f9f9f9;
    margin-top: 10px;
    flex-wrap : wrap;
    div {
        flex: 1;
        min-width : 40%;
           @media (max-width: 768px) {
              min-width : 90%;
            }
    }
      @media (max-width: 768px) {
          flex-direction : column;

        }
`;

export default ApplicationsHistory;