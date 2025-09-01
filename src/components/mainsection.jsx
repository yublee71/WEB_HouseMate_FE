import { Section } from "@/components/section";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  gap: 120px;
  @media (max-width: 600px) {
    gap: 30px;
  }
`;

export function MainSection({
  groceriesCategories,
  choresCategories,
  groceriesContent,
  choresContent,
}) {
  return (
    <StyledMain>
      <Section
        title="To-buy"
        categories={groceriesCategories}
        content={groceriesContent}
      ></Section>
      <Section
        title="To-do"
        categories={choresCategories}
        content={choresContent}
      ></Section>
    </StyledMain>
  );
}
