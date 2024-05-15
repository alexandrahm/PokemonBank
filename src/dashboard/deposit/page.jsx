import React from "react";
import Title from "/src/components/Title";
import Amounts from "/src/components/Amounts";

import deposit from "/src/resources/icons/noun-receive-money-5673855.svg";

// export const metadata = {
//   title: "Dashboard - Depositar",
//   description:
//     "Pokémon Bank is a paid service that allows you to store and manage your Pokémon in private boxes on the internet.",
// };

const Page = () => {
  return (
    <main>
      <Title text="Depositar" />
      <section>
        <p className="text-pokeblue font-bold mt-10 text-justify">
          ¡Genial! Si estás buscando una manera rápida y segura de depositar
          dinero, has llegado al lugar correcto. Con nuestro sistema de depósito
          en línea, podrás agregar fondos a tu cuenta bancaria en solo unos
          pocos clics. Es fácil y conveniente.
        </p>
        <h2 className="text-pokeblue font-bold text-md lg:text-2xl mt-10">
          Ingresa la cantidad de dinero a depositar
        </h2>
      </section>
      {<Amounts TextButton="Depositar" icon={deposit} />}
    </main>
  );
};

export default Page;