import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "../helpers/horizontalGlobalFieldsConfig.ts";
import { getTableData } from "../services/service.ts";
import TableView from "./Table.tsx";
import TextView from "./TextView.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding-top: 16px;
`;
interface Props {
  table: Table;
}

const View: React.FC<Props> = ({ table }) => {
  const [getType, setGetType] = useState("");
  const [option, setOption] = useState<any>({});

  useEffect(() => {
    setGetType("");
    setOption({});
  }, [table.id]);

  if (table.getURL) return <TableView table={table} />;
  let dataType;

  if (getType === "table") {
    dataType = <TableView table={table} url={option.url} />;
  }
  if (getType === "text") dataType = <TextView table={table} url={option} />;
  console.log(getType, "saved!");
  return (
    <Container>
      {table.gets!.map((optionGet) => {
        console.log(optionGet);
        return (
          <button
            key={optionGet.label}
            onClick={() => {
              setGetType(optionGet.type);
              setOption(optionGet);
            }}
          >
            {optionGet.label}
          </button>
        );
      })}
      {dataType}
    </Container>
  );
};

export default View;
