import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BarChart from "../components/statisticsComponents/BarChart.tsx";
import Title from "../components/Title.tsx";
import ScatterChart from "../components/statisticsComponents/ScatterChart.tsx";

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
  gap: 80px;
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
          title={"Comparing sales for current, previous and the next existent trimester for publisher"}
          chartDataParam={{
            label: "name",
            stacked: false,
            dataset: [
              {
                value: "lag1",
                label: "LAG",
                color: "rgb(192, 180, 75)",
              },
              {
                value: "vanzari",
                label: "current",
              },
              {
                value: "lead1",
                label: "LEAD",
                color: "rgb(128, 0, 32)",
              }
            ],
          }}
          param={[
            {
              label: "Trimestru",
              type: "number",
              id: "trimestru",
            },
            {
              label: "Anul",
              type: "number",
              id: "anul",
            },
          ]}
        />
      </Row>
      <Row>
        <BarChart //ex 5
          url="http://localhost:8181/ords/dwbi_olap/statistic/cinci"
          title={"Selected Day Statistics"}
          chartDataParam={{
            label: "sale_date",
            stacked: false,
            dataset: [
              {
                value: "current_day_sales",
                label: "current day sales",
                color: "rgb(192, 180, 75)",
              },
              {
                value: "total_sales_in_a_month",
                label: "total in a month",
              },
              {
                value: "previous_day_sales_minus_current_day",
                label: "sales compare prev day",
                color: "rgb(128, 0, 32)",
              },
              {
                value: "avg_sales_last_3_days",
                label: "avg last 3 days",
                color: "rgb(15, 128, 0)",
              }
            ],
          }}
          param={[
            {
              label: "Choose day",
              type: "date",
              id: "data_sel",
            }
          ]}
        />
      </Row>

      {/* <Row> */}
        {/* <BarChart //ex 3
          url="http://localhost:8181/ords/dwbi_olap/statistic/trei"
          title={"t"}
          chartDataParam={{
            label: "author_name",
            stacked: false,
            dataset: [
              {
                value: "total_sales_books",
                label: "total sales",
                color: "rgba(192, 180, 75, 0.7)",
              },
              {
                value: "percent_rank_",
                label: "percent",
                color: "rgba(15, 128, 0, 0.49)",
              },
              // {
              //   value: "luna_number",
              //   label: "luna",
              //   color: "rgba(128, 83, 0, 0.36)",
              // }
            ],
          }}
         
        />
      </Row> */}
      <Row>
        <ScatterChart // Exemplu Scatter ex 3
          url="http://localhost:8181/ords/dwbi_olap/statistic/trei"
          title={"Percent Rank for lunar sales for authors"}
          chartDataParam={{
            label: "author_name",
           
            dataset: [
              {
                valueX: "percent_rank_",
                valueY: "total_sales_books"
              },
             
            ],
          }}
        />
      </Row>
    </Container>
  );
};

export default Statistics;
