import React, { useState } from "react";
import styled from "styled-components";
import { horizontalGlobalFieldsConfig } from "../helpers/horizontalGlobalFieldsConfig.ts";
import MenuBar from "../components/MenuBar.tsx";
import { useNavigate } from "react-router-dom";
import { horizontalEXEUFieldsConfig } from "../helpers/horizontalEXEUFieldsConfig.ts";
import { horizontalEUFieldsConfig } from "../helpers/horizontalEUFieldsConfig.ts";

const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 4px;
  margin-top: 8px;
  min-width: 80%;
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

const SubDatabaseButton = styled.button`
  font-size: 14px;
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
  const [subDBType, setSubDBType] = useState("");
  const navigate = useNavigate();

  const handleSubNavClick = (type) => {
    navigate(`${type}`);
    setSubDBType(type);
  };

  const getFiledsConfig = () => {
    switch (subDBType) {
      case "global":
        return horizontalGlobalFieldsConfig;
      case "exeu":
        return horizontalEXEUFieldsConfig;
      case "eu":
        return horizontalEUFieldsConfig;
      default:
        return horizontalGlobalFieldsConfig;
    }
  };

  return (
    <Cotainer>
      <NavBar>
        <Logo>TAM Book</Logo>
        <SubDatabaseButton
          key={`global`}
          onClick={() => handleSubNavClick("global")}
        >
          Global
        </SubDatabaseButton>
        <SubDatabaseButton
          key={`exeu`}
          onClick={() => handleSubNavClick("exeu")}
        >
          ExEU
        </SubDatabaseButton>
        <SubDatabaseButton key={`eu`} onClick={() => handleSubNavClick("eu")}>
          EU
        </SubDatabaseButton>
      </NavBar>

      <NavBar></NavBar>

      <MenuBar type={subDBType} fieldConfig={getFiledsConfig()} />
    </Cotainer>
  );
};

export default Home;
