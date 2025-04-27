// ProfessionalInfo.js
import React, { useState } from "react";
import styled from "styled-components";

const ProfessionalInfo = () => {
    const [formData, setFormData] = useState({
        jobType: "Internship",
        field: "DBA",
        mainRole: "Internship",
        cv: null,
        certificates: null,
    });

    const [skills, setSkills] = useState(["Python", "React", "Tailwind", "communication"]);
    const [newSkill, setNewSkill] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const addSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const removeSkill = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
    };
    const handleSubmit = () => {
        alert("Form submitted!");
    };

    return (
        <FullPageStudInfoPro>
            <ProfessionalInfoSection>
                <SectionTitle>PROFESSIONAL</SectionTitle>

                <GridContainer>
                    <UploadButton>UPLOAD CV</UploadButton>
                    <UploadButton>UPLOAD CERTIFICATES</UploadButton>
                </GridContainer>

                <GridContainer>
                    <FormField>
                        <Label htmlFor="jobType">Job Type*</Label>
                        <SelectField
                            id="jobType"
                            name="jobType"
                            value={formData.jobType}
                            onChange={handleInputChange}
                        >
                            <option value="Internship">Internship</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                        </SelectField>
                    </FormField>

                    <FormField>
                        <Label htmlFor="field">Field*</Label>
                        <SelectField
                            id="field"
                            name="field"
                            value={formData.field}
                            onChange={handleInputChange}
                        >
                            <option value="DBA">DBA</option>
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                        </SelectField>
                    </FormField>

                    <FormField>
                        <Label htmlFor="mainRole">Main Role*</Label>
                        <SelectField
                            id="mainRole"
                            name="mainRole"
                            value={formData.mainRole}
                            onChange={handleInputChange}
                        >
                            <option value="Internship">Internship</option>
                            <option value="Junior">Junior</option>
                            <option value="Senior">Senior</option>
                        </SelectField>
                    </FormField>
                </GridContainer>

                <SkillsSection>
                    <SkillsTitle>Skills</SkillsTitle>
                    <SkillsList>
                        {skills.map((skill, index) => (
                            <SkillItem key={index}>
                                <SkillText>{skill}</SkillText>
                                <RemoveButton type="button" onClick={() => removeSkill(skill)}>
                                    🗑️
                                </RemoveButton>
                            </SkillItem>
                        ))}
                    </SkillsList>
                    <AddSkillContainer>
                        <SkillInput
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            placeholder="Add a skill"
                        />
                        <AddButton type="button" onClick={addSkill}>
                            ➕
                        </AddButton>
                    </AddSkillContainer>
                </SkillsSection>
                <SubmitSectionStd>
                    <SubmitButton type="button" onClick={handleSubmit}>
                        SUBMIT
                    </SubmitButton>
                </SubmitSectionStd>

            </ProfessionalInfoSection>
        </FullPageStudInfoPro>
    );
};

const FullPageStudInfoPro = styled.div`
    margin-top: -30px;
    background-color:#F0F8FF ;
      min-height: calc(100vh - 60px);
`;
const ProfessionalInfoSection = styled.section`
    margin-bottom: 20px;
    margin: 2%;
    margin-left: 10%;
    margin-right: 10%;
      @media (max-width: 768px) {
           margin-left: 2%;
           margin-right: 2%;
        }
`;

const SectionTitle = styled.h2`
    margin-top: 20px;
    padding-top: 50px;
    color: #011850;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    margin-bottom: 20px;
        @media (max-width: 768px) {
             grid-template-columns: 1fr;
            gap : 20px;
        }
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
     @media (max-width: 768px) {
          width: 100%;
        }
`;

const FormField = styled.div`
    display: flex;
  flex-direction: column;
`;

const Label = styled.label`
    font-size: 14px;
    margin-bottom: 15px;
    color: #011850;
    font-weight: bold;
`;

const SelectField = styled.select`
    width: 100%;
    padding: 10px;
    border: 2px solid #00aaff;
    border-radius: 4px;
    background-color: #f4f4f4;
`;

const SkillsSection = styled.div`
    margin-top: 20px;
    color: #011850;
`;

const SkillsTitle = styled.h3`
    margin-bottom: 15px;
`;

const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    border: 1px solid #00aaff;
    border-radius: 5px;
    padding: 5px 10px;
`;

const SkillText = styled.span``;

const RemoveButton = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 16px;
    margin-left: 5px;
    cursor: pointer;
`;

const AddSkillContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
     flex-wrap : wrap;
`;

const SkillInput = styled.input`
    width: 500px;
    padding: 8px;
    border: 1px solid #00aaff;
    border-radius: 5px;
      @media (max-width: 768px) {
          width: 100%;
          max-width: 300px;
        }
`;

const AddButton = styled.button`
    background-color: #00aaff;
    color: #011850;
    border: none;
    border-radius: 50%;
    padding: 10px 10px;
    cursor: pointer;
`;

const SubmitSectionStd = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 50px;
`;

const SubmitButton = styled.button`
     width: 10%;
    padding: 10px;
    background-color: #011850;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 0 auto; /* Center the button horizontally */
    display: block; /* Required for margin: auto to work */

    margin-bottom: 30px;
    font-weight: bold;

    transition: background-color 0.3s ease;
    &:hover {
        background-color: #00aaff;
    }
      @media (max-width: 768px) {
          width: 50%;
        }
`;


export default ProfessionalInfo;