import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  padding: 0 24px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;

export const CheckBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
`;

export const CheckBoxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CheckBox = styled.input`
  box-sizing: border-box;
  border-radius: 3px;
  width: 16px;
  height: 16px;
`;

export const CheckBoxLabel = styled.label`
  font-size: 12px;
`;
