// JobOfferForm.js
import React, { useState } from "react";
import styled from "styled-components";
import SkillChip from "./SkillChip";

const JobOfferForm = () => {
  const [skills, setSkills] = useState(["Python", "React", "Tailwind", "communication"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <FullPageOffer>
    <FormContainerOffer>
      <Title>If You haven’t Posted any Job Offer Yet, Post Them here:</Title>

      <FormRowWithImage>
        <FormFieldOfferContainer>
          <FormFieldOffer>
            <Label>Job Title*</Label>
            <InputOffer type="text" />
          </FormFieldOffer>
          <FormFieldOffer>
            <Label>Number Of People To Hire For This Job*</Label>
            <InputOffer type="number" />
          </FormFieldOffer>
          <FormFieldOffer>
           <Label>Job Type*</Label>
           <SelectOffer>
            <option value="Internship">Internship</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
           </SelectOffer>
           </FormFieldOffer>
            <FormFieldOffer>
                <Label>Category*</Label>
                <SelectOffer>
                <option value="Finance">Finance</option>
                <option value="Technology">Technology</option>
                <option value="Marketing">Marketing</option>
                </SelectOffer>
           </FormFieldOffer>
      </FormFieldOfferContainer>
        <FormImage>
          <img src="..\images\job.png" alt="Vacant" />
        </FormImage>
      </FormRowWithImage>

      <FormField>
        <Label>Skills Required</Label>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillChip key={index} skill={skill} onRemove={handleRemoveSkill} />
          ))}
          <SkillInput
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add skill"
          />
          <AddButton onClick={handleAddSkill}>
            +
          </AddButton>
        </SkillsContainer>
      </FormField>

      <FormField>
        <Label>Job Description*</Label>
        <TextArea />
      </FormField>

      <FormRow>
        <FormField>
          <Label>Start Date*</Label>
          <InputOffer type="date" />
        </FormField>
        <FormField>
          <Label>End Date*</Label>
          <InputOffer type="date" />
        </FormField>
      </FormRow>

      <SubmitButton>Publish Offer</SubmitButton>
    </FormContainerOffer>
    </FullPageOffer>
  );
};


const FullPageOffer = styled.div`
    background-color: #F0F8FF;
    margin-top: -68px;
     padding-bottom: 20px;
`;
const FormContainerOffer = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 20px;
    margin-top: 5%;
    color: #011850;
    background-color: #F0F8FF;
    font-weight: bold;
        @media (max-width: 768px) {
            width: 90%;
        }
`;

const Title = styled.h1`
    /* You can add title specific styles here */
`;

const FormRowWithImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
      @media (max-width: 768px) {
          flex-direction: column;
        }
`;
const FormFieldOfferContainer = styled.div`
    flex: 1;
`;
const FormImage = styled.div`
    img {
        width: 400px;
        height: 400px;
          @media (max-width: 768px) {
           width: 300px;
           height: 300px;
        }
    }
`;
const FormFieldOffer = styled.div`
    margin-bottom: 20px;
`;
const FormField = styled.div`
    margin-bottom: 20px;
`;
const Label = styled.label`
   /* Add label specific styles here */
`;
const InputOffer = styled.input`
    margin-top: 2px;
    width: 100%;
    height: 40px;
    padding: 2px;
    border: 3px solid #57a5dd;
    border-radius: 5px;
    font-size: 14px;
    background-color: #e6e6e6;
`;
const SelectOffer = styled.select`
    margin-top: 2px;
    width: 100%;
    height: 40px;
    padding: 2px;
    border: 3px solid #57a5dd;
    border-radius: 5px;
    font-size: 14px;
    background-color: #e6e6e6;
`;
const SkillsContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
`;
const SkillInput = styled.input`
    padding: 5px;
    border: 1px solid #57a5dd;
    border-radius: 5px;
    font-size: 14px;
`;
const AddButton = styled.button`
    padding: 5px 10px;
    background-color: #011850;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bolder;
    font-size: medium;
`;

const TextArea = styled.textarea`
     margin-top: 2px;
    width: 100%;
    height: 80px;
    padding: 2px;
    border: 3px solid #57a5dd;
    border-radius: 5px;
    font-size: 14px;
    background-color: #e6e6e6;
`;

const FormRow = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap : wrap;
      @media (max-width: 768px) {
         flex-direction : column;
        }
`;

const SubmitButton = styled.button`
     width: 30%;
    padding: 10px;
    background-color: #011850;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 0 auto; /* Center the button horizontally */
    display: block; /* Required for margin: auto to work */
    font-weight: bold;
       @media (max-width: 768px) {
            width : 70%;
        }
`;


export default JobOfferForm;