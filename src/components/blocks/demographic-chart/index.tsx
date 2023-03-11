import { PrefPopulation } from "@/utils/type";
import styled from "styled-components";

const Container = styled.div``;

type Props = {
  prefPopulation: PrefPopulation[];
};

const DemographicChart: React.FC<Props> = ({ prefPopulation }) => {
  return <Container></Container>;
};

export default DemographicChart;
