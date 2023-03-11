import Header from "@/components/blocks/header";
import PrefecturesList from "@/components/blocks/prefecture-list";
import styled from "styled-components";

const Container = styled.div``;

const ScreenTop = () => {
  return (
    <Container>
      <Header />
      <PrefecturesList />
    </Container>
  );
};

export default ScreenTop;
