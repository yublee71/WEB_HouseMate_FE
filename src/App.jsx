import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { MainSection } from "@/components/mainsection";
import { Footer } from "@/components/footer";
import { AddButton } from "./components/addbutton";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const theme = createTheme({
  palette: {
    primary: {
      white: "#fff",
      light: "#ced4f5",
      main: "#4d5aa3",
      dark: "#313e8a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "'Inter'",
  },
});

const StyledInput = styled.input`
  display: inline-block;
  margin-right: 14px;
`;

const StyledImg = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const [usr, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const groceriesCategories = ["Recurring", "One-off"];
  const choresCategories = ["My Task", "Others' task"];
  const users = [usr.displayName, "Some Rando"];
  const groceriesContent = [[], []];
  const choresContent = [[], []];
  const [groceries, setGroceries] = useState([]);
  const [chores, setChores] = useState([]);
  for (let i = 0; i < groceries.length; i++) {
    let t = groceries[i];
    for (let j = 0; j < groceriesCategories.length; j++)
      if (t.category == groceriesCategories[j])
        groceriesContent[j].push(
          <div key={i}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <StyledInput type="checkbox" />
                {t.item}
              </div>
              <StyledImg
                src="close.png"
                alt="close"
                height="15px"
                onClick={() => {
                  const updated = [...groceries];
                  updated.splice(i, 1);
                  setGroceries(updated);
                }}
              />
            </div>
            <Divider sx={{ marginTop: "20px" }} />
          </div>
        );
  }
  for (let i = 0; i < chores.length; i++) {
    let t = chores[i];
    let j;
    if (t.owner == usr.displayName) j = 0;
    else j = 1;
    choresContent[j].push(
      <div key={i}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <StyledInput type="checkbox" />
            {t.item}
          </div>
          <StyledImg
            src="close.png"
            alt="close"
            height="15px"
            onClick={() => {
              const updated = [...chores];
              updated.splice(i, 1);
              setChores(updated);
            }}
          />
        </div>
        <Divider sx={{ marginTop: "20px" }} />
      </div>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Header
        logo="🏡"
        title="HouseMate"
        usr={usr}
        isLoading={isLoading}
      ></Header>
      <MainSection
        groceriesCategories={groceriesCategories}
        groceriesContent={groceriesContent}
        choresCategories={choresCategories}
        choresContent={choresContent}
      ></MainSection>
      <AddButton
        groceries={groceries}
        setGroceries={setGroceries}
        groceriesCategories={groceriesCategories}
        chores={chores}
        setchores={setChores}
        users={users}
      ></AddButton>
    </ThemeProvider>
  );
}

export default App;
