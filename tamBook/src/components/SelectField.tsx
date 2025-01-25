import React from "react";
import styled from "styled-components";
import { Field } from "../helpers/oltpFieldsConfig.ts";

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

const Select = styled.select`
  height: 54px;
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

const SelectField: React.FC<Field> = (props) => {
  const { label, isRequired, id, options } = props;

  return (
    <FieldContainer>
      <Label htmlFor={id}>
        {label}
        {isRequired && <span style={{ color: "red" }}>*</span>}
      </Label>

      <Select id={id} name={id} required={isRequired}>
        {options.map((option: any) => (
          <option value={option}>{option}</option>
        ))}
      </Select>
    </FieldContainer>
  );
};

export default SelectField;
