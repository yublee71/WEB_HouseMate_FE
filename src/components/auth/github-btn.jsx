import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { Error } from "./error";

const Button = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  font: inherit;
  padding: 5px;
  width: 70%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 100%;
`;

export function GithubButton({ setIsPopupOpen }) {
  const [error, setError] = useState("");
  const errors = {
    "auth/account-exists-with-different-credential":
      "Email already registered. Try logging in with password",
  };
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      setIsPopupOpen(false);
    } catch (e) {
      console.log(e);
      let displayedErrMsg = "Unknown error.";
      if (e instanceof FirebaseError) {
        displayedErrMsg = errors[e.code] ?? "Unknown error.";
      }
      setError(displayedErrMsg);
    }
  };
  return (
    <>
      <Button onClick={onClick}>
        Continue with Github
        <Logo src="/github-logo.svg" />
      </Button>
      {error !== "" ? <Error message={error} /> : null}
    </>
  );
}
