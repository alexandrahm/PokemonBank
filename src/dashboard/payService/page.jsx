import React from "react";
import Title from "/src/components/Title";
import ServicesButtons from "/src/components/ServicesButtons";

const page = () => {
  return (
    <main className="max-w-full">
      <Title text="Pago de Servicio" />
      <section>
        <p className="text-pokeblue font-bold mt-10 text-justify">
          ¡Es hora de pagar tus facturas! Con nuestro sistema de pagos en línea,
          puedes pagar tus servicios básicos como agua, luz, internet, planes de
          teléfono, abonos a cuentas, y muchos más desde la comodidad de tu
          hogar o lugar de trabajo.
        </p>
        <ServicesButtons/>
      </section>
    </main>
  );
};

export default page;
