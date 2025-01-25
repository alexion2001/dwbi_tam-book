import React, { useState } from "react";
import styled from "styled-components";
import { oltpFieldsConfig } from "../helpers/oltpFieldsConfig.ts";
import { olapFieldsConfig } from "../helpers/olapFieldsConfig.ts";
import MenuBar from "../components/MenuBar.tsx";
import { useNavigate } from "react-router-dom";

const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 4px;
  margin-top: 8px;
`;
const Logo = styled.div`
  font-size: 24px;
  padding-right: 8px;
  color: var(--c-brand-blue);
  font-weight: bold;
`;
const NavBarButton = styled.button`
  font-size: 18px;
  padding: 8px;
  background: transparent;
  color: black;
  border-radius: 4px;
  margin-right: 4px;
  &:hover {
    background-color: var(--c-brand-blue);
  }
`;
const Home = (): React.JSX.Element => {
  const [dbType, setDbType] = useState("oltp");
  const navigate = useNavigate();
  const handleNavClick = (type: "oltp" | "olap") => {
    navigate("/");
    setDbType(type);
  };
  return (
    <Cotainer>
      <NavBar>
        <Logo>TAM Book</Logo>
        <NavBarButton key={`oltp`} onClick={() => handleNavClick("oltp")}>
          OLTP
        </NavBarButton>
        <NavBarButton key={`olap`} onClick={() => handleNavClick("olap")}>
          OLAP
        </NavBarButton>
      </NavBar>
      {dbType === "oltp" ? (
        <MenuBar fieldConfig={oltpFieldsConfig} />
      ) : (
        <MenuBar fieldConfig={olapFieldsConfig} />
      )}
    </Cotainer>
  );
};

export default Home;
