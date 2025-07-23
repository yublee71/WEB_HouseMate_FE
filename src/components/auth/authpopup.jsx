import { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./form-login";
import { SignUpForm } from "./form-signup";
import { GithubButton } from "./github-btn";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 700px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  z-index: 10;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  display: inline;
  border: none;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 3%;
  right: 5%;
`;

const StyledDiv = styled.div`
  width: 70%;
`;

export function AuthPopup({ setIsPopupOpen }) {
  const [isMember, setIsMember] = useState(true);
  const onClick = () => {
    setIsMember((current) => !current);
  };
  const onClose = () => {
    setIsPopupOpen((current) => !current);
  };
  return (
    <Wrapper>
      {isMember ? (
        <StyledDiv>
          <LoginForm setIsPopupOpen={setIsPopupOpen} />
          Don&apos;t have an account?
          <ToggleButton onClick={onClick}>Sign Up</ToggleButton>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <SignUpForm />
          Already have an account?
          <ToggleButton onClick={onClick}>Log In</ToggleButton>
        </StyledDiv>
      )}
      <GithubButton setIsPopupOpen={setIsPopupOpen} />
      <CloseButton src="/close.png" onClick={onClose}></CloseButton>
    </Wrapper>
  );
}
