import styled from "styled-components";

const StyledAddSection = styled.section`
  position: fixed;
  top: 15%;
  left: 15%;
  height: 70%;
  width: 70%;
  background-color: var(--color-grey-100);
  border-radius: 15px;
  box-shadow: 0px 1px 9px rgba(128, 128, 128, 0.404);
`;

export function AddSection() {
  return <StyledAddSection></StyledAddSection>;
}
