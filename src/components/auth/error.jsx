import styled from "styled-components";

const StyledDiv = styled.div`
  color: tomato;
`;

export function Error({ message }) {
  return <StyledDiv>{message}</StyledDiv>;
}
