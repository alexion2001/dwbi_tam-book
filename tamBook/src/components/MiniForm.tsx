import React from "react";
import styled from "styled-components";
import InputField from "../components/InputField.tsx";

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding-top: 4px;
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
  config: any;
  setData: (formData) => void;
}

const MiniForm: React.FC<Props> = ({ config, setData }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());
    setData(formData);
  };

  return (
    <FormContainer id="invoice-form" onSubmit={handleSubmit}>
      {config.map((field) => {
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

export default MiniForm;
