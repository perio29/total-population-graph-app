import { PrefPopulation } from "@/utils/type";
import styled from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Container = styled.div``;

type Props = {
  prefPopulations: PrefPopulation[];
};

const DemographicChart: React.FC<Props> = ({ prefPopulations }) => {
  const series: Highcharts.SeriesOptionsType[] = [];
  const categories: string[] = [];

  prefPopulations.map((population) => {
    const data: number[] = [];

    population.data.map((value) => {
      data.push(value.value);
      categories.push(String(value.year));
    });

    series.push({
      type: "line",
      name: population.name,
      data: data,
    });
  });

  const options: Highcharts.Options = {
    title: {
      text: "総人口推移",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    series:
      series.length === 0
        ? [{ type: "line", name: "都道府県名", data: [] }]
        : series,
  };

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
};

export default DemographicChart;
