import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../components/Title.tsx";
import Form from "./Form.tsx";
import { Table } from "../helpers/oltpFieldsConfig.ts";
import View from "./View.tsx";

const TableContainer = styled.div`
  width: 80%;
  box-shadow: 0 0px 30px rgb(0 0 0 / 15%);
  padding: 20px;
  border-radius: 6px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 20px 0;
`;

const ViewModeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Button = styled.button`
  background: transparent;
  font-size: 18px;
  margin: 4px;
  cursor: pointer;
  border: none;
  &:hover {
    color: var(--c-brand-blue);
    font-weight: bold;
  }
`;

interface Props {
  table: Table;
}

const TablePage: React.FC<Props> = ({ table }) => {
  const [isTableView, setIsTableView] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    setIsTableView(true);
    setIsUpdate(false);
  }, [table.id]);
  return (
    <TableContainer>
      <Title title={table.tableName} />
      {!table.isViewOnly && (
        <ViewModeContainer>
          <Button
            onClick={() => {
              setIsTableView(true);
            }}
          >
            Tabel
          </Button>
          |
          <Button
            onClick={() => {
              setIsTableView(false);
              setIsUpdate(false);
            }}
          >
            Form
          </Button>
          {table.update && (
            <Button
              onClick={() => {
                setIsTableView(false);
                setIsUpdate(true);
              }}
            >
              | Update
            </Button>
          )}
        </ViewModeContainer>
      )}

      {isTableView ? (
        <View table={table} />
      ) : (
        <Form table={table} isUpdate={isUpdate} />
      )}
    </TableContainer>
  );
};

export default TablePage;
