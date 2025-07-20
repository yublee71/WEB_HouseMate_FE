import { Section } from "@/components/section";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  gap: 120px;
`;

export function MainSection({ firstSection, secondSection }) {
  return (
    <StyledMain>
      <Section title="To-buy" content={firstSection}></Section>
      <Section title="To-do" content={secondSection}></Section>
    </StyledMain>
  );
}
