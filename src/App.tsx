import React from "react";
import ButtonInfo from "./components/ButtonInfo";
import Header from "./components/Header";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="flex flex-col min-w-[320px]">
      <Header logo={<Logo />} buttonInfo={<ButtonInfo />} />
      <div className="flex flex-col self-center w-[288px] md:w-[374px] lg:w-[418px] py-8 gap-4"></div>
    </div>
  );
}

export default App;
