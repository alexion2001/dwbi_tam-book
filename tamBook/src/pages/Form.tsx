import React from "react";
import styled from "styled-components";
import InputField from "../components/InputField.tsx";
import { Table } from "../helpers/oltpFieldsConfig.ts";
import SelectField from "../components/SelectField.tsx";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding-top: 16px;
`;

const SubmitButton = styled.button`
  font-size: 18px;
  background-color: var(--c-brand-blue);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  letter-spacing: 1px;
  outline: 0;
  outline-offset: 0px;
  width: 50%;
  margin-top: 28px;
  margin-bottom: 15px;
`;

interface Props {
  table: Table;
}

const Form: React.FC<Props> = ({ table }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
  };

  return (
    <FormContainer id="invoice-form" onSubmit={handleSubmit}>
      {table.attributes.map((field) => {
        if (field.type === "select") {
          return (
            <SelectField
              label={field.label}
              type={field.type}
              isRequired={field.isRequired}
              id={field.id}
              options={field.options}
            />
          );
        }
        return (
          <InputField
            label={field.label}
            type={field.type}
            isRequired={field.isRequired}
            id={field.id}
          />
        );
      })}

      <SubmitButton type="submit" id="submit-button">
        SAVE
      </SubmitButton>
    </FormContainer>
  );
};

export default Form;
