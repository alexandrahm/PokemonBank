import React, { useState } from "react";
import Image from "/src/components/Image";
import Swal from "sweetalert";

import ligth from "/src/resources/icons/noun-lightbulb-2906104.svg";
import phone from "/src/resources/icons/noun-phone-5674174.svg";
import water from "/src/resources/icons/noun-water-1153013.svg";
import www from "/src/resources/icons/noun-www-3867915.svg";

const services = [
  {
    name: "Electricidad",
    icon: ligth,
    amount: 90,
  },
  {
    name: "Agua",
    icon: water,
    amount: 5,
  },
  {
    name: "Internet",
    icon: www,
    amount: 45,
  },
  {
    name: "Telefonía",
    icon: phone,
    amount: 15,
  },
];

const activeService1 = "Electricidad";
const ServicesButtons = () => {
  const [activeService, setActiveService] = useState("");
  const [paid, setPaid] = useState(false);

  const handleButtonClick = (serviceName) => {
    setActiveService(serviceName);
  };

  const activeAmount = services.find(
    (service) => service.name === activeService
  )?.amount;

  const handlePayment = () => {
    if (activeService) {
      // Obtiene el usuario logueado del localStorage
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      // Verifica que tenga saldo suficiente para pagar el servicio activo
      if (loggedUser.saldoInicial >= activeAmount) {
        // Resta el monto del servicio al saldo inicial del usuario
        loggedUser.saldoInicial -= activeAmount;
        // Crea un objeto transacción con el tipo, el monto y la fecha
        const transaction = {
          tipo: `Pago de ${activeService}`,
          monto: -Number(activeAmount.toFixed(2)),
          fecha: new Date().toISOString(),
        };
        // Agrega el objeto transacción al array de transacciones del usuario
        loggedUser.transacciones.push(transaction);
        // Actualiza el localStorage con el nuevo usuario
        localStorage.setItem("user", JSON.stringify(loggedUser));

        Swal({
          title: "¡Pago realizado con éxito!",
          icon: "success",
        });
        setPaid(true);
      } else {
        Swal({
          title: "No tienes saldo suficiente para pagar este servicio",
          icon: "error",
        });
      }
    } else {
      Swal({
        title: "Debes seleccionar un servicio para pagar",
        icon: "error",
      });
    }
  };

  const showAlert = (message, type) => {
    const icon = type === "success" ? "success" : "error";
    Swal({
      title: message,
      type: icon,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <section className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
        {services.map(({ name, icon, amount }) => (
          <div
            key={name}
            className={`${
              activeService === name ? "bg-pokeblue-light" : "bg-pokeblue"
            } hover:bg-pokeblue-light cursor-pointer p-5 rounded-xl flex flex-col justify-center items-center transition hover:transition`}
            onClick={() => handleButtonClick(name)}
          >
            <Image src={icon} alt={name} width={150} height={150} />
            <span className="text-xl font-bold text-white">{name}</span>
            <span className="text-md font-bold text-white">Precio: ${amount}</span> {/* Línea añadida para mostrar el precio */}
          </div>
        ))}
      </section>
      <div className="flex flex-col mt-5 justify-center items-center">
        <h2 className="text-3xl font-bold text-pokeblue">Monto a pagar: </h2>
        <span className="text-3xl font-bold text-pokeblue-light mb-5">
          ${activeAmount}
        </span>
        <button
          type="button"
          className="flex justify-center items-center p-3 text-xl px-16 space-x-3 rounded-3xl bg-pokeblue text-white hover:bg-pokeblue-light transition hover:transition"
          onClick={handlePayment}
        >
          Pagar Servicio
        </button>
      </div>
    </>
  );
};

export default ServicesButtons;