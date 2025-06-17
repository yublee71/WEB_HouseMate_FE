import styled from "styled-components";
import { auth } from "../../firebase";

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
`;

const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 3%;
  right: 5%;
`;

const SignoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export function ProfilePopup({ setIsPopupOpen }) {
  const onClose = () => {
    setIsPopupOpen((current) => !current);
  };
  const onSignout = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      auth.signOut();
      setIsPopupOpen(false);
    }
  };
  return (
    <Wrapper>
      <CloseButton src="/close.png" onClick={onClose}></CloseButton>
      <SignoutButton onClick={onSignout}>Sign Out</SignoutButton>
    </Wrapper>
  );
}
