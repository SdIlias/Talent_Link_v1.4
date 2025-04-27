// EmployerDashboard.js
import React, { useState } from "react";
import styled from "styled-components";

const OfferCard = ({ type, duration, startDate, endDate, post, certificates, skills, description, onDelete }) => (
  <OfferCardContainer>
    <OfferDetails>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Durée:</strong> {duration}</p>
      <p><strong>Date début:</strong> {startDate}</p>
      <p><strong>Date fin:</strong> {endDate}</p>
      <p><strong>Post:</strong> {post}</p>
      <p><strong>Certificats:</strong> {certificates}</p>
      <p><strong>Skills:</strong> {skills}</p>
      <p><strong>About the job:</strong> {description}</p>
    </OfferDetails>
    <OfferActions>
      <EditButton>✏️</EditButton>
      <DeleteButton onClick={onDelete}>🗑️</DeleteButton>
    </OfferActions>
  </OfferCardContainer>
);

const AddOfferCard = () => (
  <AddOfferCardContainer>
    <CardTitle>Attract qualified candidates and build your ideal team today!</CardTitle>
    <AddOfferButton>Add Offer</AddOfferButton>
  </AddOfferCardContainer>
);

const ViewApplicationsCard = () => (
  <ViewApplicationsCardContainer>
    <CardTitle>View all approved candidates and manage applications effortlessly!</CardTitle>
    <ViewApplicationsButton>View Applications</ViewApplicationsButton>
  </ViewApplicationsCardContainer>
);

const EmployerDashboard = () => {
  const [offers, setOffers] = useState([
    {
      type: "PFE",
      duration: "6 mois",
      startDate: "19/02/2025",
      endDate: "01/10/2025",
      post: "DBA",
      certificates: "Ora19.1473",
      skills: "Oracle DBA, SQL, Ansible",
      description:
        "Gérer et administrer les systèmes et les systèmes de gestion des données; en assure la cohérence la qualité et la sécurité. Participe à l’étude et à la mise en œuvre des projets."
    },
    {
      type: "PFE",
      duration: "6 mois",
      startDate: "19/02/2025",
      endDate: "01/10/2025",
      post: "DBA",
      certificates: "Ora19.1473",
      skills: "Oracle DBA, SQL, Ansible",
      description:
        "Gérer et administrer les systèmes et les systèmes de gestion des données; en assure la cohérence la qualité et la sécurité. Participe à l’étude et à la mise en œuvre des projets."
    },
    {
      type: "PFE",
      duration: "6 mois",
      startDate: "19/02/2025",
      endDate: "01/10/2025",
      post: "DBA",
      certificates: "Ora19.1473",
      skills: "Oracle DBA, SQL, Ansible",
      description:
        "Gérer et administrer les systèmes et les systèmes de gestion des données; en assure la cohérence la qualité et la sécurité. Participe à l’étude et à la mise en œuvre des projets."
    },
    {
      type: "PFE",
      duration: "6 mois",
      startDate: "19/02/2025",
      endDate: "01/10/2025",
      post: "DBA",
      certificates: "Ora19.1473",
      skills: "Oracle DBA, SQL, Ansible",
      description:
        "Gérer et administrer les systèmes et les systèmes de gestion des données; en assure la cohérence la qualité et la sécurité. Participe à l’étude et à la mise en œuvre des projets."
    },{
      type: "PFE",
      duration: "6 mois",
      startDate: "19/02/2025",
      endDate: "01/10/2025",
      post: "DBA",
      certificates: "Ora19.1473",
      skills: "Oracle DBA, SQL, Ansible",
      description:
        "Gérer et administrer les systèmes et les systèmes de gestion des données; en assure la cohérence la qualité et la sécurité. Participe à l’étude et à la mise en œuvre des projets."
    },{
      type: "PFE",
      duration: "6 mois",
      startDate: "19/02/2025",
      endDate: "01/10/2025",
      post: "DBA",
      certificates: "Ora19.1473",
      skills: "Oracle DBA, SQL, Ansible",
      description:
        "Gérer et administrer les systèmes et les systèmes de gestion des données; en assure la cohérence la qualité et la sécurité. Participe à l’étude et à la mise en œuvre des projets."
    },{
      type: "PFE",
      duration: "6 mois",
      startDate: "19/02/2025",
      endDate: "01/10/2025",
      post: "DBA",
      certificates: "Ora19.1473",
      skills: "Oracle DBA, SQL, Ansible",
      description:
        "Gérer et administrer les systèmes et les systèmes de gestion des données; en assure la cohérence la qualité et la sécurité. Participe à l’étude et à la mise en œuvre des projets."
    },{
      type: "PFE",
      duration: "6 mois",
      startDate: "19/02/2025",
      endDate:"01/10/2025",
      post: "DBA",
      certificates: "Ora19.1473",
      skills: "Oracle DBA, SQL, Ansible",
      description:
        "Gérer et administrer les systèmes et les systèmes de gestion des données; en assure la cohérence la qualité et la sécurité. Participe à l’étude et à la mise en œuvre des projets."
    },
  ]);

  const [visibleOffers, setVisibleOffers] = useState(4); // Initially show only 4 offers

  const handleDelete = (index) => {
    const updatedOffers = offers.filter((offer, i) => i !== index);
    setOffers(updatedOffers);
  };

  const handleLoadMore = () => {
    setVisibleOffers(prev => Math.min(prev + 4, offers.length));
  };

   const handleReduce = () => {
    setVisibleOffers(prev => Math.max(prev - 4, 4));
  };


  return (
    <FullComponent>
      <TitleEmp>
        <h2>List Of Offers</h2>
      </TitleEmp>
      <OfferListContainer>
        {offers.slice(0, visibleOffers).map((offer, index) => (
          <React.Fragment key={index}>
            <OfferCard {...offer} onDelete={() => handleDelete(index)} />
            <SeparatorLine />
          </React.Fragment>
        ))}
      </OfferListContainer>
      <ButtonContainer>
        {visibleOffers < offers.length && (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        )}
         {visibleOffers === offers.length && visibleOffers > 4 && (
          <ReduceButton onClick={handleReduce}>Show Less</ReduceButton>
        )}
      </ButtonContainer>
      <BottomActions>
        <AddOfferCard />
        <ViewApplicationsCard />
      </BottomActions>
    </FullComponent>
  );
};

const FullComponent = styled.div`
    background-color: #F0F8FF;
    margin: 0;
    padding: 0;
    height: 145vh;
    @media (max-width: 768px) {
          height :320vh;
          
        }
    
`;

const OfferListContainer = styled.div`
    font-family: "Arial", sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #F0F8FF ;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    justify-content: center;
`;

const TitleEmp = styled.div`
     margin: 0;
    padding: 10px;

    font-size: 20px;
    font-weight: bolder;
    color: #011850;
    text-align: center;
    background-color: #F0F8FF;
`;

const OfferCardContainer = styled.div`
  background-color: #e3f2ff;
  border-radius: 15px;
  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  text-align: left;
  width: 45%;
  box-sizing: border-box;

   @media (max-width: 768px) {
          width: 90%;
          margin-bottom : 20px;
        }
`;

const SeparatorLine = styled.hr`
  margin: 0;
  max-width: 400px;
  border: none;
  border-top: 2px solid #011850;
`;


const OfferDetails = styled.div`
    p {
      margin: 5px 0;
      font-size: 14px;
      line-height: 1.6;
      color: #1f2a44;
    }
`;


const OfferActions = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;


const EditButton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-left: 5px;
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-left: 5px;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const LoadMoreButton = styled.button`
  background-color: #011850;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px auto;
  display: flex;
  align-items: center;
  &:hover{
       background-color: #003e99;
  }
`;
const ReduceButton = styled.button`
  background-color: #011850;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px auto;
  display: flex;
  align-items: center;
    &:hover{
       background-color: #003e99;
    }
`;

const AddOfferCardContainer = styled.div`
  background-color: #e3f2ff;
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  max-width: 45%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
     @media (max-width: 768px) {
          width: 90%;
        }
`;

const ViewApplicationsCardContainer = styled.div`
  background-color: #e3f2ff;
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  max-width: 45%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
     @media (max-width: 768px) {
          width: 90%;
        }
`;

const CardTitle = styled.h3`
  font-size: 16px;
  color: #1f2a44;
  margin-bottom: 10px;
`;

const AddOfferButton = styled.button`
    background-color: #011850;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  &:hover{
    background-color: #003e99;
    }
`;

const ViewApplicationsButton = styled.button`
    background-color: #011850;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
     transition: background-color 0.3s ease;
    &:hover{
      background-color: #003e99;
    }
`;
const BottomActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px 0;
  flex-wrap: wrap;
   @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default EmployerDashboard;