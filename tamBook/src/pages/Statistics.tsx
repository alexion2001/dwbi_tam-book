import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "../helpers/oltpFieldsConfig.ts";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding-top: 16px;
`;
interface Props {}

const Statistics: React.FC<Props> = ({}) => {
  const [categoryData, setCategoryData] = useState<any>([
    { category: "category_1", total_sales: 507.18 },
    { category: "category_8", total_sales: 424.61 },
    { category: "category_5", total_sales: 403.47 },
  ]);
  const chartData = {
    labels: categoryData.map((item) => item.category),
    datasets: [
      {
        label: "Vânzări Totale",
        data: categoryData.map((item) => item.total_sales),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Top 3 Cele Mai Vândute Categorii</h2>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default Statistics;
