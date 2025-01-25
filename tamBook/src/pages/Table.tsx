import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "../helpers/oltpFieldsConfig.ts";
import { getTableData } from "../services/invoiceService.ts";

const TableContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding-top: 16px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 16px;
`;

const TableHeader = styled.th`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const EmptyState = styled.div``;
interface Props {
  table: Table;
  url?: string;
}

const TableView: React.FC<Props> = ({ table, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData((await getTableData(url ? url : table.getURL || "")) || []);
    };

    fetchData();
  }, [table.getURL]);
  console.log("nanan",data,url);

  if (!data || data.length === 0 )
    return <EmptyState> No data</EmptyState>;
  return (
    <TableContainer>
      <StyledTable>
        {/* Tabel Head */}
        <thead>
          <TableRow>
            {table.attributes.map((field) => (
              <TableHeader key={field.label}>{field.label}</TableHeader>
            ))}
          </TableRow>
        </thead>

        {/* Tabel Body */}
        <tbody>
          {data &&
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {table.attributes.map((field) => (
                  <TableCell key={`${rowIndex}-${field.id}`}>
                    {row[field.id] ?? "—"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TableView;
