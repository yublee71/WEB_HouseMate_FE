import { useState } from "react";
import "./App.css";
import { Header } from "@/components/header";
import { MainSection } from "@/components/mainsection";
import { Footer } from "@/components/footer";
import { AddButton } from "./components/addbutton";

function App() {
  return (
    <>
      <Header logo="🏡" title="HouseMate"></Header>
      <MainSection></MainSection>
      <AddButton></AddButton>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
