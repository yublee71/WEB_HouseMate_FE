import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: orange;
  border: none;
  font-family: inherit;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
`;
