import "./App.css";
import { useState } from "react";
import { Header } from "@/components/header";
import { MainSection } from "@/components/mainsection";
import { Footer } from "@/components/footer";
import { AddButton } from "./components/addbutton";

import { ThemeProvider, createTheme } from "@mui/material/styles";

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

function App() {
  const [groceries, setgroceries] = useState([
    { item: "potato", category: 0 },
    { item: "avocado", category: 0 },
    { item: "towel", category: 1 },
  ]);
  const [chores, setchores] = useState([
    { item: "clean the oven", owner: "Yubeen Lee" },
    { item: "take out the garbage", owner: "Yubeen :ee" },
    { item: "vacuum", owner: "my flatmate" },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Header logo="🏡" title="HouseMate"></Header>
      <MainSection
        firstSection={groceries}
        secondSection={chores}
      ></MainSection>
      <AddButton
        groceries={groceries}
        setgroceries={setgroceries}
        chores={chores}
        setchores={setchores}
      ></AddButton>
    </ThemeProvider>
  );
}

export default App;
