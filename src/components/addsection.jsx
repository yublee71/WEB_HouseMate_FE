import styled from "styled-components";
import { useState } from "react";

const StyledAddSection = styled.section`
  position: fixed;
  top: 15%;
  left: 15%;
  height: 70%;
  width: 70%;
  background-color: var(--color-grey-100);
  border-radius: 15px;
  box-shadow: 0px 1px 9px rgba(128, 128, 128, 0.404);
  padding: 10px;
  display: flex;
  flex-direction: column;
  img {
    &:hover {
      cursor: pointer;
    }
    align-self: flex-end;
  }
`;

export function AddSection(props) {
  let setVisibility = props.setVisibility;
  let groceries = props.groceries;
  let setgroceries = props.setgroceries;
  return (
    <StyledAddSection>
      <img
        src="close.png"
        alt="close"
        height="24px"
        onClick={() => {
          setVisibility(false);
        }}
      />
      <form
        action=""
        method="GET"
        onSubmit={(event) => {
          event.preventDefault();
          const new_item = event.target.item.value;
          setgroceries([...groceries, { item: new_item }]);
          setVisibility(false);
        }}
      >
        <label htmlFor="item">Add item</label>
        <input type="text" id="item" name="item" placeholder="item" required />
        <button type="submit">submit</button>
      </form>
    </StyledAddSection>
  );
}
