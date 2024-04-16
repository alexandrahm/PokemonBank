import React from "react";

const TableHistory = () => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="mt-10 overflow-auto max-h-[30rem]">
      <table className="min-w-full text-left table-auto border-collapse">
        <thead>
          <tr className="bg-pokeblue-light text-white">
            <th className="py-2 px-4">Monto</th>
            <th className="py-2 px-4">Transaccion</th>
            <th className="py-2 px-4">Fecha</th>
          </tr>
        </thead>
        {
          loggedUser.transacciones.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="3" className="text-center text-xl py-4">
                  No hay transacciones...
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y divide-gray-200">
              {loggedUser.transacciones.map((transaction, index) => {
                const transactionDate = new Date(transaction.fecha);
                const formattedDate = `${transactionDate.getFullYear()}-${(
                  transactionDate.getMonth() + 1
                )
                  .toString()
                  .padStart(2, "0")}-${transactionDate
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`;

                return (
                  <tr
                    key={index}
                    className="bg-pokegray-light rounded-xl p-2 text-pokeblue shadow-md my-2"
                  >
                    <td className="font-bold text-md lg:text-2xl py-2 px-4">
                      ${transaction.monto}
                    </td>
                    <td className="font-bold text-md lg:text-2xl py-2 px-4">
                      {transaction.tipo}
                    </td>
                    <td className="font-bold text-md lg:text-2xl py-2 px-4">
                      {formattedDate}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )
        }
      </table>
    </div>
  );
};

export default TableHistory;