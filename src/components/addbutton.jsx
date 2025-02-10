import styled from "styled-components";
import { useState } from "react";
import { AddSection } from "@/components/addsection";

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

export function AddButton({ groceries, setgroceries, chores, setchores }) {
  const [isVisible, setisVisible] = useState(false);
  return (
    <>
      <StyledAddButton>
        <img
          src="/src/assets/addsign.png"
          alt="add sign"
          height="24px"
          onClick={() => {
            setisVisible(true);
          }}
        />
      </StyledAddButton>
      {isVisible && (
        <AddSection
          setVisibility={setisVisible}
          groceries={groceries}
          setgroceries={setgroceries}
          chores={chores}
          setchores={setchores}
        />
      )}
    </>
  );
}
