import React from "react";
import Title from "/src/components/Title";
import TableHistory from "/src/components/TableHistory";

// export const metadata = {
//   title: "Dashboard - Historial",
//   description:
//     "Pokémon Bank is a paid service that allows you to store and manage your Pokémon in private boxes on the internet.",
// };

const page = () => {
  return (
    <main>
      <Title text="Historial de movimientos" />
      <section>
        <p className="text-pokeblue font-bold mt-10 text-justify">
          ¡Mantente al tanto de tus finanzas con nuestro sistema de historial de
          transacciones en línea! Con esta herramienta, puedes ver un registro
          detallado de todos los movimientos de tu cuenta bancaria, desde
          transferencias hasta pagos de facturas y retiros de efectivo.
        </p>
      </section>
      <TableHistory/>
    </main>
  );
};

export default page;
