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
      main: "#3f50b5",
      dark: "#002884",
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
    { item: "grocery list1" },
    { item: "grocery list2" },
    { item: "grocery list3" },
  ]);
  const [chores, setchores] = useState([
    { item: "to-do list1" },
    { item: "to-do list2" },
    { item: "to-do list3" },
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
      {/* <Footer></Footer> */}
    </ThemeProvider>
  );
}

export default App;
