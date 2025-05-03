import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { Table } from "../helpers/horizontalGlobalFieldsConfig.ts";
import Title from "./Title.tsx";
import TablePage from "../pages/TablePage.tsx";
import Statistics from "../pages/Statistics.tsx";

const Container = styled.div`

}`;

const NavBar = styled.div`
  border-bottom: 1px solid gray;
  margin-top: 4px;
  display: flex
;
    flex-wrap: nowrap;
}
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
  type: string;
  fieldConfig: Table[] | undefined;
}

const MenuBar: React.FC<Props> = ({ type, fieldConfig }) => {
  if (!fieldConfig) {
    return null;
  }

  return (
    <Container>
      <NavBar>
        {fieldConfig.map((table) => (
          <NavBarButton
            key={`tab-${table.tableName}`}
            to={`${type}/${table.id}`}
          >
            {table.tableName}
          </NavBarButton>
        ))}
      </NavBar>
      <Routes>
        <Route
          path={`${type}`}
          element={
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
            >
              Choose a database
            </div>
          }
        />

        {fieldConfig.map((table) => (
          <Route
            key={table.tableName}
            path={`${type}/${table.id}`}
            element={<TablePage table={table} />}
          />
        ))}
      </Routes>
    </Container>
  );
};

export default MenuBar;
