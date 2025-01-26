import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Scatter } from "react-chartjs-2";  // Importă Scatter Chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getTableData } from "../../services/service.ts";  // Presupun că ai un serviciu pentru date

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || "100%"};
`;

interface ScatterChartProps {
  url: string;
  title: string;
  width?: string;
  chartDataParam: {
    label: string;
    dataset: {
      valueX: string;  // Câmpul pentru X (luna_number)
      valueY: string;  // Câmpul pentru Y (percent_rank_)
    }[];
  };
}

const ScatterChart: React.FC<ScatterChartProps> = ({
  url,
  title,
  chartDataParam,
  width,
}) => {
  const [data, setData] = useState<any[]>([]);
 
  const chartData = {
    labels: data.map((item) => item[chartDataParam.label]),
    datasets: chartDataParam.dataset.map((ds) => ({
      label: ds.valueY,
      data: data.map((item) => ({
        x: item[ds.valueX],  
        y: item[ds.valueY],  
      })),
       backgroundColor: "rgba(75, 192, 192, 0.2)",  
       borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      pointRadius: 5,
    })),
  };

  const fetchData = async () => {
    const fetchedData = await getTableData(url);
    setData(fetchedData || []);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <Container width={width}>
      <h3>{title}</h3>
      <Scatter
        data={chartData}
        options={{
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "Percent Rank",
              },
            },
            y: {
              title: {
                display: true,
                text: "Sales Books",
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default ScatterChart;
