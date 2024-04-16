import Title from "/src/components/Title";
import React from "react";
import ChartHome from "/src/components/ChartHome";

const Page = () => {
  const userName = JSON.parse(localStorage.getItem("user"));

  const UserInfo = () => (
    <div className="flex flex-col text-pokeblue font-bold">
      <span>{userName.nombre}</span>
      <span>No. Cuenta: {userName.cuenta}</span>
    </div>
  );

  const WelcomeMessage = () => (
    <section className="mt-10">
      <p className="text-pokeblue font-bold text-justify">
        ¡Bienvenido al banco en línea más seguro y conveniente! Con nuestro
        software de banca en línea, tendrás acceso las 24 horas del día, los 7
        días de la semana, a todas tus cuentas bancarias desde cualquier lugar
        del mundo con conexión a Internet.
      </p>
      <h1 className="text-pokeblue-light font-bold text-2xl lg:text-5xl mt-10">
        Saldo Disponible: ${userName.saldoInicial}
      </h1>
      <TransactionType />
    </section>
  );

  const TransactionType = () => (
    <div className="flex flex-row items-center mt-5">
      <h2 className="text-pokeblue font-bold text-md lg:text-2xl ml-4">
        Tipo de transacciones realizadas
      </h2>
    </div>
  );

  return (
    <main>
      <Title text="Inicio" />
      <UserInfo />
      <WelcomeMessage />
      <ChartHome />
    </main>
  );
};

export default Page;