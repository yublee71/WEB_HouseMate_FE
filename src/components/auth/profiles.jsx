import styled from "styled-components";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { AuthPopup } from "./authpopup";
import { onAuthStateChanged } from "firebase/auth";
import { Button, Menu, MenuItem, ListItemIcon } from "@mui/material";
import Logout from "@mui/icons-material/Logout";

const StyledDiv = styled.div`
  height: 45px;
  min-width: 7rem;
  background-color: #e7e6e6;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  max-width: 7rem;
  min-width: 3rem;
  border-radius: 8px;
`;

const Profile = styled.div`
  font-size: 20px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 50%;
  background-color: #4697e2;
  width: 36px;
  height: 36px;
  line-height: 40px;
  color: white;
  text-align: center;
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
  const onProfileClick = async (event) => {
    setAnchorEl(event.currentTarget);
    setIsProfilePopupOpen(true);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const onClick = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      auth.signOut();
      setIsProfilePopupOpen(false);
      setAnchorEl(null);
    }
  };
  const onClose = async () => {
    setIsProfilePopupOpen(false);
    setAnchorEl(null);
  };
  return (
    <>
      {!isLoading ? (
        <>
          {usr ? (
            <StyledDiv>
              <Profile onClick={onProfileClick}>
                {usr.displayName.charAt(0)}
              </Profile>
            </StyledDiv>
          ) : (
            <Button
              onClick={onLoginClick}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                height: "2.2rem",
                flexGrow: 1,
                maxWidth: "7rem",
                minWidth: "3rem",
                fontWeight: "600",
              }}
            >
              Log in
            </Button>
          )}
        </>
      ) : null}
      {isLoginPopupOpen ? (
        <AuthPopup setIsPopupOpen={setIsLoginPopupOpen} />
      ) : null}
      {isProfilePopupOpen ? (
        <Menu
          open={isProfilePopupOpen}
          anchorEl={anchorEl}
          onClose={onClose}
          dense
        >
          <MenuItem onClick={onClick} dense>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      ) : null}
    </>
  );
}
