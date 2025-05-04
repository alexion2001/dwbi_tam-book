import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "../helpers/horizontalGlobalFieldsConfig.ts";
import { getTableData } from "../services/service.ts";
import InputField from "../components/InputField.tsx";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding-top: 16px;
`;

const FormContainer = styled.div`
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

const EmptyState = styled.div``;

interface Props {
  table: Table;
  url: any;
}

const TextView: React.FC<Props> = ({ table, url }) => {
  const [data, setData] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne comportamentul implicit al formularului

    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());

    const fetchData = async (param: string) => {
      console.log("urrrl",url.url + '/'+param);
      const response = await getTableData(`${url.url}/${param}` || "");
      setData(response || []);
    };

    const param = formData[url.param as keyof typeof formData];
    if (typeof param === "string") {
      await fetchData(param);
    } else {
      console.error("Invalid param");
    }
  };

  return (
    <TableContainer>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <FormContainer>
          <InputField 
            label={url.param}
            type="text"
            isRequired={true}
            id={url.param}
            isFormDisplay={true}
          />
          <SubmitButton type="submit">SAVE</SubmitButton>
        </FormContainer>
      </form>
      {data.length > 0 ? (
        <div>
          <h2>Results:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <EmptyState>No data found</EmptyState>
      )}
    </TableContainer>
  );
};

export default TextView;
