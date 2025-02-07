import styled from "styled-components";
import { AddSection } from "./addsection";
import { useState } from "react";

const StyledAddButton = styled.button`
  position: fixed;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: none;
  bottom: 32px;
  right: 32px;
  background-color: var(--color-red-100);
  padding: 2px 0 0 2px;
  img {
    height: 30%;
    &:hover {
      cursor: pointer;
    }
  }
`;

// const StyledAddSection = styled.section`
//   position: fixed;
//   top: 20%;
//   left: 15%;
//   height: 60%;
//   width: 70%;
//   background-color: var(--color-grey-100);
//   border-radius: 15px;
//   box-shadow: 0px 1px 9px rgba(128, 128, 128, 0.404);
// `;

export function AddButton() {
  const [isVisible, setVisibility] = useState(false);
  return (
    <>
      <AddSection></AddSection>
      <StyledAddButton>
        <img
          src="/src/assets/addsign.png"
          alt="add sign"
          height="24px"
          onClick={() => {
            setVisibility(true);
          }}
        />
        {/* {isVisible && <StyledAddSection>hi</StyledAddSection>} */}
      </StyledAddButton>
    </>
  );
}
