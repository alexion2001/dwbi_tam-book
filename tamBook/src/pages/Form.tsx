import React from "react";
import styled from "styled-components";
import InputField from "../components/InputField.tsx";
import { Table } from "../helpers/horizontalGlobalFieldsConfig.ts";
import SelectField from "../components/SelectField.tsx";
import { saveData } from "../services/service.ts";

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
  isUpdate?: boolean;
  isDelete?: boolean;
}

const Form: React.FC<Props> = ({ table, isUpdate, isDelete }) => {
  console.log("form:", isDelete, isUpdate);
  const getOpType = () => {
    if (isUpdate) return "PUT";
    else if (isDelete) return "DELETE";
    else return "POST";
  };

  const getURLType = (data) => {
    if (isUpdate) return table.updateURL!;
    else if (isDelete) return table.deleteURL! + "/" + Object.values(data)[0];
    else return table.postURL;
  };

  const getFieldType = () => {
    if (isUpdate) return table.update!;
    else if (isDelete) return table.delete!;
    else return table.attributes;
  };

  const save = async (data: any) => {
    console.log("save", data);
    try {
      const saveResponse = await saveData(
        data,
        getURLType(data) || "",
        getOpType()
      );
      console.log("saveResponse", saveResponse);
    } catch (error) {
      console.error("Error fetching client code:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
    save(formData);
  };
  const atr = isUpdate ? table.update : table.attributes;
  console.log(isUpdate);

  if (!table.postURL && !table.updateURL && !table.deleteURL) return null;
  return (
    <FormContainer id="invoice-form" onSubmit={handleSubmit}>
      {getFieldType()!.map((field) => {
        if (field.isFormDisplay) {
          if (field.type === "select") {
            return (
              <SelectField
                isFormDisplay={field.isFormDisplay}
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
              isFormDisplay={field.isFormDisplay}
              label={field.label}
              type={field.type}
              isRequired={field.isRequired}
              id={field.id}
            />
          );
        }
      })}

      <SubmitButton type="submit" id="submit-button">
        SAVE
      </SubmitButton>
    </FormContainer>
  );
};

export default Form;
