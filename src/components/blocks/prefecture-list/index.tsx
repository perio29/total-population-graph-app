import usePrefecture from "@/hooks/use-prefecture";
import { PrefPopulation, PrefPopulationResponse } from "@/utils/type";
import axios from "axios";
import { useState } from "react";
import DemographicChart from "../demographic-chart";

import {
  CheckBox,
  CheckBoxGroup,
  CheckBoxLabel,
  CheckBoxWrapper,
  Container,
  Title,
} from "./style";

const PrefecturesList = () => {
  const { data, error, isLoading } = usePrefecture();
  const [prefPopulation, setPrefPopulation] = useState<PrefPopulation[]>([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const title = "都道府県";

  const handleClickCheck = async (
    prefCode: number,
    prefName: string,
    checked: boolean
  ) => {
    if (checked) {
      const { data } = await axios.get<PrefPopulationResponse>(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${String(
          prefCode
        )}`,
        { headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string } }
      );
      setPrefPopulation([
        ...prefPopulation,
        { name: prefName, data: data.result.data[0].data },
      ]);
    } else {
      setPrefPopulation(
        prefPopulation.filter((value) => value.name !== prefName)
      );
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <CheckBoxWrapper>
        {data?.result.map((value, index) => (
          <CheckBoxGroup key={index}>
            <CheckBox
              type="checkbox"
              onChange={(e) =>
                handleClickCheck(
                  value.prefCode,
                  value.prefName,
                  e.target.checked
                )
              }
            />
            <CheckBoxLabel>{value.prefName}</CheckBoxLabel>
          </CheckBoxGroup>
        ))}
      </CheckBoxWrapper>
      <DemographicChart prefPopulation={prefPopulation} />
    </Container>
  );
};

export default PrefecturesList;
