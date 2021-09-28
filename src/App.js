import "./App.css";
import { useState } from "react";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import { InfoData, InfoData2 } from "./data/InfoData";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Slide slides={SliderData}/>
      {/* <InfoSection {...InfoData} /> */}
      <InfoSection sections={InfoData2} />
    </>
  );
}

export default App;
