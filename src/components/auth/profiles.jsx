import styled from "styled-components";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { AuthPopup } from "./authpopup";
import { onAuthStateChanged } from "firebase/auth";
import { ProfilePopup } from "./profilepopup";

const Wrapper = styled.div`
  background-color: var(--color-grey-200);
  border-radius: 20px;
  height: 2.5rem;
  flex-grow: 1;
  max-width: 5rem;
  min-width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
`;

const Profile = styled.div`
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
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
      <Wrapper>
        {!isLoading ? (
          <>
            {usr ? (
              <Profile onClick={onProfileClick}>{usr.displayName}</Profile>
            ) : (
              <LoginButton onClick={onLoginClick}>Log in</LoginButton>
            )}
          </>
        ) : null}
      </Wrapper>
      {isLoginPopupOpen ? (
        <AuthPopup setIsPopupOpen={setIsLoginPopupOpen} />
      ) : null}
      {isProfilePopupOpen ? (
        <ProfilePopup setIsPopupOpen={setIsProfilePopupOpen} />
      ) : null}
    </>
  );
}
