import styled from "@emotion/styled";
import { Colors } from "../../ui";

export const SectionSC = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 124px;
`;

export const ContainerSC = styled.div`
  max-width: 1250px;
  width: 100%;

  padding: 72px 100px;

  background-color: ${Colors.PRIMARY};
  border-radius: 12px;

  /* position: relative; */
`;

export const ContainerInputSC = styled.div`
  max-width: 370px;
  width: 100%;
`;

export const FormSC = styled.form`
  display: flex;
  justify-content: center;

  margin-top: 50px;
  column-gap: 24px;
`;

export const Input = styled.input`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;

  padding: 12px 32px;
  width: 100%;

  border: 2px solid #ffffff;
  border-radius: 240px;

  &:focus {
    outline: none;
  }
`;