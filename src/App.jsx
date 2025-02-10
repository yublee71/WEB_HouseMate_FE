import { useState } from "react";
import "./App.css";
import { Header } from "@/components/header";
import { MainSection } from "@/components/mainsection";
import { Footer } from "@/components/footer";
import { AddButton } from "./components/addbutton";

function App() {
  const [groceries, setgroceries] = useState([
    { item: "hi" },
    { item: "yo" },
    { item: "hey" },
  ]);
  const [chores, setchores] = useState([
    { item: "hi2" },
    { item: "yo2" },
    { item: "hey2" },
  ]);
  return (
    <>
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
    </>
  );
}

export default App;
