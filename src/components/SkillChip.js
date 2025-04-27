// SkillChip.js
import React from "react";
import styled from "styled-components";

const SkillChip = ({ skill, onRemove }) => {
  return (
    <SkillChipContainer>
      {skill}
      <DeleteButton onClick={() => onRemove(skill)}>
        ✖
      </DeleteButton>
    </SkillChipContainer>
  );
};

const SkillChipContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #f4f4f4;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: red;
`;


export default SkillChip;