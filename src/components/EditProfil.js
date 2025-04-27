// EditProfil.js
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const EditProfil = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    address: "",
    picture: null,
    cv: null,
    certificates: null,
    jobType: "Internship",
    field: "DBA",
    mainRole: "Internship",
    skills: [],
    newSkill: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleAddSkill = () => {
    if (formData.newSkill.trim() && !formData.skills.includes(formData.newSkill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.newSkill],
        newSkill: "",
      });
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <PersonalSectionEmp>
        <SectionTitleEmp >Enterprise Profile</SectionTitleEmp>
        <GridEmp>
          <FormField>
            <Label htmlFor="firstName">Society Name*</Label>
            <InputField
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="picture">Logo *</Label>
            <UploadButton
              type="button"
              onClick={() => document.getElementById("fileInput").click()}
            >
              UPLOAD
            </UploadButton>
            <FileInput
              type="file"
              id="fileInput"
              name="picture"
              onChange={handleFileChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="tel">Tel*</Label>
            <InputField
              type="tel"
              id="tel"
              name="tel"
              placeholder="Tel*"
              value={formData.tel}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">E-mail*</Label>
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="E-mail*"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormField>

          <FormField>
            <Label htmlFor="address">Address*</Label>
            <InputField
              type="text"
              id="address"
              name="address"
              placeholder="Address*"
              value={formData.address}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="address">Main Activity Field*</Label>
            <InputField
              type="text"
              id="address"
              name="address"
              placeholder="Activity field"
              value={formData.address}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="address">Year Established*</Label>
            <InputField
              type="text"
              id="address"
              name="address"
              placeholder="Activity field"
              value={formData.address}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="address">Number of Employees*</Label>
            <InputField
              type="text"
              id="Number of employees"
              name="address"
              placeholder="Activity field"
              value={formData.address}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="address">Working Languages*</Label>
            <InputField
              type="text"
              id="address"
              name="address"
              placeholder="Activity field"
              value={formData.address}
              onChange={handleInputChange}
            />
          </FormField>
        </GridEmp>
        <SectionTitleEmp>Enterprise Description</SectionTitleEmp>
          <TextArea/>
        <SaveButton>Save</SaveButton>
      </PersonalSectionEmp>
    </React.Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
          background-color: #F0F8FF; /*added background to global style */

    }
`;


const PersonalSectionEmp = styled.section`
    margin-bottom: 20px;
    margin: 2%;
    margin-left: 10%;
    margin-right: 10%;
    background-color: #F0F8FF;
      padding: 20px; /* Added padding for better spacing */
    border-radius : 10px;
     min-height: 100vh;
     padding-bottom: 40px;
    box-sizing: border-box;
      @media (max-width: 768px) {
          margin-left: 2%;
           margin-right: 2%;
        }
`;

const SectionTitleEmp = styled.h2`
    color: #011850;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 20px;

`;

const GridEmp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 15px;
      @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: #011850;
  font-weight: 500;
`;

const InputField = styled.input`
    padding: 10px;
    font-size: 14px;
     width: 100%;
    border: 1.5px solid #57a5dd;
    border-radius: 5px;
      background-color: #fff;
     transition: border-color 0.3s;
        &:focus {
        border-color: #0d47a1;
        outline: none;
          box-shadow: 0 0 5px rgba(13, 71, 161, 0.3);
      }
`;

const FileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

const UploadButton = styled.button`
    width: 150px;
    padding: 8px;
    font-size: 13px;
    font-weight: 500;
    color: #0d2b77;
    background-color: #ddd;
    border: 1.5px solid #57a5dd;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #F0F8FF;
           color : #00aaff;
      }
    &:active {
        background-color: #F0F8FF;
       }
    &:focus {
        outline: none;
          box-shadow: 0 0 5px rgba(13, 71, 161, 0.3);
      }
`;

const TextArea = styled.textarea`
    margin-top: 5px;
    width: 100%;
    height: 120px;
    padding: 8px;
    border: 1.5px solid #57a5dd;
    border-radius: 5px;
    font-size: 14px;
      background-color: #fff;
         &:focus {
        border-color: #0d47a1;
        outline: none;
         box-shadow: 0 0 5px rgba(13, 71, 161, 0.3);

         }
`;
const SaveButton = styled.button`
     width: 12%;
    padding: 10px;
    background-color: #011850;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    margin: 25px auto;
    display: block;
      font-weight: 600;
    transition: background-color 0.3s ease-in-out;
     &:hover {
       background-color: #00aaff;
      }
        @media (max-width: 768px) {
          width: 50%;
        }
`;

export default EditProfil;