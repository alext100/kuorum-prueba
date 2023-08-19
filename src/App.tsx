import React from "react";
import ButtonInfo from "./components/ButtonInfo";
import CardWithImage from "./components/CardWithImage";
import Header from "./components/Header";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="flex flex-col min-w-[320px]">
      <Header logo={<Logo />} buttonInfo={<ButtonInfo />} />
      <div className="flex flex-col self-center w-[288px] md:w-[374px] lg:w-[418px] py-8 gap-4">
        <CardWithImage
          title=""
          description="Con esta votación has ayudado a reducir la Huella de carbono."
          image="eco.svg"
          link=""
          linkText="Saber más"
        />
        <CardWithImage
          title="Crea tu votación"
          description="Construye tu votación en muy pocos pasos y obtén resultados inmediatos."
          image="vote.svg"
          link=""
          linkText="Crear votación"
        />
      </div>
    </div>
  );
}

export default App;
