import styled from "styled-components";

const StyledDiv = styled.div`
  color: tomato;
  margin-bottom: 10px;
  white-space: pre-line;
`;

export function Error({ message }) {
  if (message == undefined) message = "Unknown error.";
  return <StyledDiv>{message}</StyledDiv>;
}
