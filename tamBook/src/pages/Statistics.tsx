import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BarChart from "../components/statisticsComponents/BarChart.tsx";
import Title from "../components/Title.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding-top: 16px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 100%;
`;
interface Props {}

const Statistics: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Title title="STATISTICS" />
      <Row>
        <BarChart //ex 1
          url="http://localhost:8181/ords/dwbi_olap/statistic/unu"
          width="50%"
          title={"Best sales categories for books still in stock"}
          chartDataParam={{
            label: "name",
            dataset: [
              {
                value: "total_sales",
                label: "Total Sales",
              },
            ],
          }}
          param={[
            {
              label: "Start Date",
              type: "date",
              id: "start_date",
            },
            {
              label: "End Date",
              type: "date",
              id: "end_date",
            },
          ]}
        />
        <BarChart //ex 2
          width="50%"
          url="http://localhost:8181/ords/dwbi_olap/statistic/doi"
          title={"Top 5 publishers this year"}
          chartDataParam={{
            label: "publisher_name",
            stacked: true,
            dataset: [
              { label: "Persoane Fizice", value: "pf_sales_percentage" },
              {
                label: "Persoane Juridice",
                value: "pj_sales_percentage",
                color: "rgb(192, 180, 75, 0.2)",
              },
            ],
          }}
        />
      </Row>
      <Row>
        <BarChart //ex 4
          url="http://localhost:8181/ords/dwbi_olap/statistic/patru"
          title={"title"}
          chartDataParam={{
            label: "name",
            stacked: false,
            dataset: [
              {
                value: "vanzari",
                label: "current",
              },
              {
                value: "lag1",
                label: "LAG",
                color: "rgb(192, 180, 75, 0.2)",
              },
              {
                value: "lead1",
                label: "LEAD",
                color: "rgb(128, 0, 32, 0.2)",
              }
            ],
          }}
          param={[
            {
              label: "Trimestru din 2024",
              type: "number",
              id: "trimestru",
            },
          ]}
        />
      </Row>
    </Container>
  );
};

export default Statistics;
