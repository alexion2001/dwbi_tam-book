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
`;
interface Props {}

const Statistics: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Title title="STATISTICS" />
      <Row>
        <BarChart //ex 1
          url="url"
          width="50%"
          title={"Best sales categories for books still in stock"}
          chartDataParam={{
            label: "category",
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
          url="url"
          title={"Top 5 publishers this year"}
          chartDataParam={{
            label: "publisher",
            stacked: true,
            dataset: [
              { label: "Persoane Fizice", value: "individual_sales" },
              {
                label: "Persoane Juridice",
                value: "business_sales",
                color: "rgb(192, 180, 75, 0.2)",
              },
            ],
          }}
        />
      </Row>
      <Row>
        <BarChart //ex 3
          url="url"
          title={"Month sales from total sales per author"}
          chartDataParam={{
            label: "author",
            stacked: true,
            dataset: [
              // {
              //   value: "total_sales_book",
              //   label: "Total Sales",
              // },
              {
                value: "percent_rank",
                label: "Rank",
                color: "rgb(192, 180, 75, 0.2)",
                // calc: "total_sales_book",
              },
            ],
          }}
          param={[
            {
              label: "Month",
              type: "date",
              id: "month",
            },
          ]}
        />
      </Row>
    </Container>
  );
};

export default Statistics;
