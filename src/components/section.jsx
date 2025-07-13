import styled from "styled-components";

const StyledSection = styled.section`
  width: 30%;
  height: 80%;
`;
const StyledSectionDiv = styled.div`
  height: 3rem;
  margin: 10px 0;
  border-radius: 15px;
  background-color: var(--color-grey-100);
  display: flex;
  align-items: center;
  div {
    width: 50%;
  }
  div:first-child {
    height: 2.2rem;
    width: 50%;
    border-radius: 13px;
    margin: 0 8px;
    background-color: white;
    box-shadow: 0px 1px 9px rgba(128, 128, 128, 0.404);
  }
`;

const StyledInput = styled.input`
  display: inline-block;
`;

export function Section({ title, content }) {
  const lis = [];
  for (let i = 0; i < content.length; i++) {
    let t = content[i];
    lis.push(
      <div>
        <StyledInput type="checkbox" key={i} />
        {t.item}
      </div>
    );
  }
  return (
    <StyledSection>
      <h2>{title}</h2>
      <StyledSectionDiv>
        <div></div>
        <div></div>
      </StyledSectionDiv>
      <ul>{lis}</ul>
    </StyledSection>
  );
}
