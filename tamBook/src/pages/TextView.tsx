import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "../helpers/oltpFieldsConfig.ts";
import { getTableData } from "../services/invoiceService.ts";
import InputField from "../components/InputField.tsx";

const TableContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding-top: 16px;
`;

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

const EmptyState = styled.div``;
interface Props {
  table: Table;
  url: any;
}

const TextView: React.FC<Props> = ({ table, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {}, [table.getURL]);
  console.log(data);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(form.entries());

    const fetchData = async (param: string) => {
      setData((await getTableData(url.url + `/${param}` || "")) || []);
    };

    const param = formData[url.param as keyof typeof formData];
    if (typeof param === "string") {
      fetchData(param);
    } else {
      console.error("Invalid param");
    }
  };

  // if (!data || data.length === 0 || !table.getURL)
  //   return <EmptyState> No data</EmptyState>;
  return (
    <TableContainer>
      <FormContainer id="invoice-form" onSubmit={handleSubmit}>
        <InputField
          label={url.param}
          type={"text"}
          isRequired={true}
          id={url.param}
        />

        <SubmitButton type="submit" id="submit-button">
          SAVE
        </SubmitButton>
      </FormContainer>
      <p>{data}</p>
    </TableContainer>
  );
};

export default TextView;
