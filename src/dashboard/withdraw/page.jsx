import React from "react";
import Title from "/src/components/Title";
import AmountsLower from "/src/components/AmountsLower";

// import deposit from "../../../../public/resources/icons/noun-receive-money-5673855.svg";
import withdraw from "/src/resources/icons/noun-send-money-5673861.svg";

// export const metadata = {
//   title: "Dashboard - Retirar",
//   description:
//     "Pokémon Bank is a paid service that allows you to store and manage your Pokémon in private boxes on the internet.",
// };


const page = () => {
  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <main>
      <Title text="Retirar" />
      <section>
        <p className="text-pokeblue font-bold mt-10 text-justify">
          ¡Es hora de retirar tu dinero! Si necesitas efectivo en mano, nuestro
          sistema de retiro de efectivo en línea es la solución que estás
          buscando. Es fácil, rápido y seguro.
        </p>
        <h1 className="text-pokeblue-light font-bold text-2xl lg:text-5xl mt-5">
          Saldo Disponible: ${userName.saldoInicial}
        </h1>
        <h2 className="text-pokeblue font-bold text-md lg:text-2xl mt-5">
          Ingresa la cantidad de dinero a retirar
        </h2>
      </section>
      <AmountsLower TextButton="Retirar" icon={withdraw} />
    </main>
  );
};

export default page;
