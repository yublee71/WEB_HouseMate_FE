import styled from "styled-components";

const StyledAddButton = styled.button`
  position: fixed;
  width: 70px;
  height: 70px;
  border-radius: 90%;
  border: none;
  bottom: 30px;
  right: 30px;
  background-color: var(--color-red-100);
`;

const AddButtonSpan = styled.span`
  background-color: white;
  position: absolute;
  &:first-child {
    height: 25px;
    width: 1.5px;
    top: 35%;
  }
  &:nth-child(2) {
    width: 25px;
    height: 1.5px;
    top: 50%;
    left: 35%;
  }
`;

export function AddButton() {
  return (
    <StyledAddButton>
      <AddButtonSpan />
      <AddButtonSpan />
    </StyledAddButton>
  );
}
