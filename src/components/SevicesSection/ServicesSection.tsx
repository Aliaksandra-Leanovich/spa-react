import styled from "@emotion/styled";
import { ExploreSection } from "../ExploreSection/ExploreSection";

export const ServicesSection = () => {
  return (
    <SectionSC>
      <Title> Our Services</Title>
      <ExploreSection />
    </SectionSC>
  );
};

export const SectionSC = styled.section`
  padding: 84px 0 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #777777;
`;