import usePrefecture from "@/hooks/use-prefecture";

import {
  CheckBox,
  CheckBoxGroup,
  CheckBoxLabel,
  CheckBoxWrapper,
  Container,
  Title,
} from "./style";

const PrefecturesCheckBox = () => {
  const { data, error, isLoading } = usePrefecture();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const title = "都道府県";

  return (
    <Container>
      <Title>{title}</Title>
      <CheckBoxWrapper>
        {data?.result.map((value, index) => (
          <CheckBoxGroup key={index}>
            <CheckBox type="checkbox" />
            <CheckBoxLabel>{value.prefName}</CheckBoxLabel>
          </CheckBoxGroup>
        ))}
      </CheckBoxWrapper>
    </Container>
  );
};

export default PrefecturesCheckBox;
