import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 24px 0px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Title>Graph of Total Population by Prefecture</Title>
    </Container>
  );
};

export default Header;
