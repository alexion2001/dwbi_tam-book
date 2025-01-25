import React from "react";
import styled from "styled-components";
import { Field } from "../helpers/oltpFieldsConfig";

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 17px;
`;

const Input = styled.input`
  height: 40px;
  font-size: 17px;
  color: var(--c-field-text-color);
  border: 1px solid var(--c-field-border-color);
  padding: 6px 12px;
  border-radius: 4px;
  background-color: var(--c-field-bg-color);

  &:focus {
    border-color: var(--c-secondary-blue);
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

const InputField: React.FC<Field> = (props) => {
  const { label, type, isRequired, id } = props;
  return (
    <FieldContainer>
      <Label htmlFor={id}>
        {label}
        {isRequired && <span style={{ color: "red" }}>*</span>}
      </Label>
      <Input type={type} id={id} name={id} required={isRequired} />
    </FieldContainer>
  );
};

export default InputField;
