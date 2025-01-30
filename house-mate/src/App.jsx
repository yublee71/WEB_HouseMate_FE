import { useState } from "react";
import "./App.css";
import Header from "@/components/header";
import MainSection from "@/components/mainsection";
import Footer from "@/components/footer";

function App() {
  return (
    <>
      <Header logo="🏡" title="HouseMate"></Header>
      <MainSection></MainSection>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
