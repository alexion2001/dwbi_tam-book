import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Table } from "../helpers/oltpFieldsConfig.ts";
import Title from "./Title.tsx";
import TablePage from "../pages/TablePage.tsx";
import Statistics from "../pages/Statistics.tsx";

const Container = styled.div``;

const NavBar = styled.div`
  border-bottom: 1px solid gray;
  margin-top: 4px;
`;

const NavBarButton = styled(Link)`
  font-size: 18px;
  padding: 12px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: var(--c-brand-blue);
    font-weight: bold;
  }
  &:active {
    color: var(--c-brand-blue);
  }
`;

interface Props {
  fieldConfig: Table[];
}

const MenuBar: React.FC<Props> = ({ fieldConfig }) => {
  return (
    <Container>
      <NavBar>
        {fieldConfig.map((table) => (
          <NavBarButton key={`tab-${table.tableName}`} to={`/${table.id}`}>
            {table.tableName}
          </NavBarButton>
        ))}
      </NavBar>
      <Routes>
        <Route path="/" element={<Statistics />} />
        {fieldConfig.map((table) => (
          <Route
            key={table.tableName}
            path={`/${table.id}`}
            element={<TablePage table={table} />}
          />
        ))}
      </Routes>
    </Container>
  );
};

export default MenuBar;
