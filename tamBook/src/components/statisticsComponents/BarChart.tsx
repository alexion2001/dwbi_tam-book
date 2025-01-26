import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
import { getTableData } from "../../services/service.ts";
import MiniForm from "../MiniForm.tsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Container = styled.div<{ width?: string }>`
  // Adaugă tipul prop-ului width
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || "100%"};
`;
interface Props {
  url: string;
  title: string;
  width?: string;
  chartDataParam: {
    label: string;
    stacked?: boolean;
    dataset: {
      value: string;
      label: string;
      color?: string;
      calc?: string;
    }[];
   
  };
  param?: {
    label: string;
    id: string;
    type: string;
  }[];
}

const Statistics: React.FC<Props> = ({
  url,
  title,
  chartDataParam,
  param,
  width,
}) => {
  const [data, setData] = useState<any>([
    // aici scoti datele de test si lasi []
    // { author: "Editura A", total_sales_book: 200, percent_rank: 0.5 },
    // { author: "Editura B", total_sales_book: 130, percent_rank: 0.66 },
    // { author: "Editura C", total_sales_book: 50, percent_rank: 1 },
  ]);

  const chartData = {
    labels: data.map((item) => item[chartDataParam.label]),
    datasets: chartDataParam.dataset.map((ds) => ({
      label: ds.label,
      data: data.map((item) =>
        item.calc ? item[ds.calc!] * item[ds.value] : item[ds.value]
      ),
      backgroundColor: ds.color || "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    })),
  };

  const fetchData = async (urlNew) => {
    setData((await getTableData(urlNew || "")) || []);
  };
  useEffect(() => {
      if (!param) fetchData(url); //decomentezi partea asta ca sa faci call-ul de get
  }, [url, param]);

  const setDataAfterInput = (formData) => {
    const values = Object.values(formData)
      .map((value) => encodeURIComponent(String(value)))
      .join("/");

    const fullUrl = `${url}/${values}`;

    fetchData(fullUrl);
  };

  return (
    <Container width={width}>
      <h3>{title}</h3>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            x: {
              stacked: chartDataParam.stacked,
            },
            y: {
              stacked: chartDataParam.stacked,
            },
          },
        }}
      />
      {param && <MiniForm config={param} setData={setDataAfterInput} />}
    </Container>
  );
};

export default Statistics;
