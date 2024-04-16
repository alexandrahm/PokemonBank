import React, { useState } from "react";
import DealButton from "/src/components/DealButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PDFButton from "/src/components/PDFButton";
import Swal from "sweetalert";
const Amounts = ({ TextButton, icon }) => {
  const [input, setInput] = useState({
    amount: "",
  });

  const [depositAmount, setDepositAmount] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [paid, setPaid] = useState(false);

  const handleAmount = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    let amount = 0;

    if (selectedAmount !== 0) {
      amount = selectedAmount;
    } else if (input.amount !== "") {
      amount = parseInt(input.amount);
    } else {
      swal({
        title: "Ingrese un monto",
        icon: "error",
      });
      return;
    }

    if (!isNaN(amount)) {
      loggedUser.saldoInicial += amount;

      // Registrar la transacción
      const transaction = {
        tipo: "Depósito",
        monto: Number(amount.toFixed(2)),
        fecha: new Date().toISOString(),
      };
      loggedUser.transacciones.push(transaction);

      localStorage.setItem("user", JSON.stringify(loggedUser));
      setSelectedAmount(0);
      setInput({ amount: "" });
      swal({
        title: "¡Depósito realizado con éxito!",
        icon: "success",
      });

      setPaid(true);
      setDepositAmount(amount);
    } else {
      swal({
        title: "Seleccione una cantidad",
        icon: "error",
      });
    }
  };

  const amount = selectedAmount || input.amount;
  console.log(amount);

  return (
    <>
      <ToastContainer position="top-center" />
      <section className="text-xl lg:text-5xl">
        <form onSubmit={handleAmount}>
          <div className="flex justify-between mt-10">
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === 5 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(5)}
              >
                $5
              </span>
            </div>
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === 10 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(10)}
              >
                $10
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === 25 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(25)}
              >
                $25
              </span>
            </div>
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === 50 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(50)}
              >
                $50
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === 100 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(100)}
              >
                $100
              </span>
            </div>
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === 150 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(150)}
              >
                $150
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-10">
            <div>
              <span
                className={`text-pokeblue font-bold hover:bg-pokeorange hover:text-white transition hover:transition cursor-pointer rounded p-2 ${
                  selectedAmount === 200 ? "bg-pokeorange text-white" : ""
                }`}
                onClick={() => setSelectedAmount(200)}
              >
                $200
              </span>
            </div>
            <div className="mt-10 lg:mt-0">
              <span className="text-pokeblue font-bold">
                ${" "}
                <input
                  type="text"
                  name="amount"
                  value={input.amount}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="text-xl lg:text-5xl w-40 lg:w-80 lg:max-w-sm focus:outline-none"
                  placeholder="Otra cantidad"
                />
              </span>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <DealButton text={TextButton} icon={icon} />
          </div>
        </form>
        {paid && (
          <PDFButton
            user={JSON.parse(localStorage.getItem("user"))}
            service={{ name: "Deposito", amount: depositAmount }}
          />
        )}
      </section>
    </>
  );
};

export default Amounts;