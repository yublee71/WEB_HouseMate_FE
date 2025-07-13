import styled from "styled-components";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { AuthPopup } from "./authpopup";
import { onAuthStateChanged } from "firebase/auth";
import { ProfilePopup } from "./profilepopup";
import { Button } from "@mui/material";

const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  cursor: pointer;
  font-size: 16px;
`;

const Profile = styled.div`
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
`;

export function Profiles() {
  const [isLoading, setIsLoading] = useState(true);
  const [usr, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const onLoginClick = async () => {
    if (!usr) setIsLoginPopupOpen(true);
  };
  const onProfileClick = async () => {
    setIsProfilePopupOpen(true);
  };
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: "white",
          height: "2.2rem",
          flexGrow: 1,
          maxWidth: "9rem",
          minWidth: "3rem",
          fontSize: "30px",
        }}
      >
        {!isLoading ? (
          <>
            {usr ? (
              <Profile onClick={onProfileClick}>{usr.displayName}</Profile>
            ) : (
              <LoginButton onClick={onLoginClick}>Log in</LoginButton>
            )}
          </>
        ) : null}
      </Button>
      {isLoginPopupOpen ? (
        <AuthPopup setIsPopupOpen={setIsLoginPopupOpen} />
      ) : null}
      {isProfilePopupOpen ? (
        <ProfilePopup setIsPopupOpen={setIsProfilePopupOpen} />
      ) : null}
    </>
  );
}
