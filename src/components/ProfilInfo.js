import React, { useState } from "react";
import styled from "styled-components";

const ProfilInfo = () => {
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
    <FullPageStudInfo>
      <PersonalSectionStud>
        <SectionTitle>PERSONAL</SectionTitle>
        <GridSts>
          <FormField>
            <Label htmlFor="firstName">First Name*</Label>
            <InputField
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="lastName">Last Name*</Label>
            <InputField
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleInputChange}
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
            <Label htmlFor="picture">Profile Picture*</Label>
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
        </GridSts>
      </PersonalSectionStud>
    </FullPageStudInfo>
  );
};

const FullPageStudInfo = styled.div`
  margin-top: -30px;
  background-color: #f0f8ff;
`;
const PersonalSectionStud = styled.section`
  margin-bottom: 20px;
  margin: 2%;
  margin-left: 10%;
  margin-right: 10%;
  border-color: #f0f8ff;

  @media (max-width: 768px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;

const SectionTitle = styled.h2`
  padding-top: 40px;
  color: #011850;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    padding-top: 20px;
      margin-bottom: 10px;
  }
`;

const GridSts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 60px;
  row-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 10px;
    row-gap: 15px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 15px;
  color: #011850;
  font-weight: bold;

   @media (max-width: 768px) {
     margin-bottom: 8px;
    }
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 14px;
  width: 300px;
  border: 2px solid #00aaff;
  border-radius: 4px;
  background-color: #f4f4f4;
  transition: border-color 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: #0d47a1;
    outline: none;
    box-shadow: 0 0 5px rgba(13, 71, 161, 0.5);
  }
  @media (max-width: 768px) {
        width: 100%;
         padding: 8px;
    }
`;

const FileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

const UploadButton = styled.button`
  width: 250px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #0d2b77;
  background-color: #cfcfcf;
  border: 2px solid #00aaff;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  box-sizing: border-box;
  &:hover {
    background-color: #b3b3b3;
    color: #00aaff;
  }

  &:active {
    background-color: #a6a6a6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(13, 71, 161, 0.5);
  }
     @media (max-width: 768px) {
        width: 100%;
         padding: 8px;
    }
`;

export default ProfilInfo;