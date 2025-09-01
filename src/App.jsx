import "./App.css";
import { useState } from "react";
import { Header } from "@/components/header";
import { MainSection } from "@/components/mainsection";
import { Footer } from "@/components/footer";
import { AddButton } from "./components/addbutton";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import styled from "styled-components";
import { Divider } from "@mui/material";

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

function App() {
  const groceriesCategories = ["Recurring", "One-off"];
  const choresCategories = ["My Task", "Others' task"];
  const users = ["Yubeen Lee", "Riku Yano"];
  const groceriesContent = [[], []];
  const choresContent = [[], []];
  const [groceries, setGroceries] = useState([
    { item: "potato", category: groceriesCategories[0] },
    { item: "avocado", category: groceriesCategories[0] },
    { item: "towel", category: groceriesCategories[1] },
  ]);
  const [chores, setChores] = useState([
    { item: "clean the oven", owner: users[0] },
    { item: "take out the garbage", owner: users[1] },
    { item: "vacuum", owner: users[1] },
  ]);
  for (let i = 0; i < groceries.length; i++) {
    let t = groceries[i];
    for (let j = 0; j < groceriesCategories.length; j++)
      if (t.category == groceriesCategories[j])
        groceriesContent[j].push(
          <div key={i}>
            <StyledInput type="checkbox" />
            {t.item}
            <Divider sx={{ marginTop: "20px" }} />
          </div>
        );
  }
  for (let i = 0; i < chores.length; i++) {
    let t = chores[i];
    let j;
    if (t.owner == "Yubeen Lee") j = 0;
    else j = 1;
    choresContent[j].push(
      <div key={i}>
        <StyledInput type="checkbox" />
        {t.item}
        <Divider sx={{ marginTop: "20px" }} />
      </div>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Header logo="🏡" title="HouseMate"></Header>
      <MainSection
        groceriesCategories={groceriesCategories}
        groceriesContent={groceriesContent}
        choresCategories={choresCategories}
        choresContent={choresContent}
      ></MainSection>
      <AddButton
        groceries={groceries}
        setgroceries={setGroceries}
        chores={chores}
        setchores={setChores}
      ></AddButton>
    </ThemeProvider>
  );
}

export default App;
