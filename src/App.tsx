import React from "react";
import ButtonInfo from "./components/ButtonInfo";
import CardWithImage from "./components/CardWithImage";
import Header from "./components/Header";
import Logo from "./components/Logo";
import MainCard from "./components/MainCard";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex flex-col min-w-[320px] -bg--color-ap-bg-neutral-90">
      <Header logo={<Logo />} buttonInfo={<ButtonInfo />} />
      <div className="flex flex-col self-center items-center px-0 py-8 md:py-20 gap-4 w-[288px] md:w-[374px] lg:w-[418px]">
        <CardWithImage
          title=""
          description="Con esta votación has ayudado a reducir la Huella de carbono."
          image="eco.svg"
          link=""
          linkText="Saber más"
        />
        <MainCard
          icon="success.svg"
          title="Voto registrado"
          description="Tu voto en la votación “Asamblea General de la Real Federación Española de vela 2023” se ha registrado."
          button={
            <Button
              text="Descargar certificado"
              size="medium"
              state="enabled"
              onClick={() => alert("Descargando certificado...")} // Just for testing purposes
            />
          }
          helpText="El enlace de descarga de tu certificado de voto tiene una validez de 5 minutos."
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
