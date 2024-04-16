import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PieController,
  ArcElement,
  Legend,
  Tooltip,
);

const ChartHome = () => {
  const loggedUser = JSON.parse(localStorage.getItem('user'));

  // Obtener los tipos de transacciones y contar la cantidad de veces que aparecen
  const transactionTypes = loggedUser.transacciones.reduce((types, transaction) => {
    const { tipo } = transaction;
    if (types[tipo]) {
      types[tipo] += 1;
    } else {
      types[tipo] = 1;
    }
    return types;
  }, {});

  // Convertir los datos en el formato requerido para el gráfico de pastel
  const data = {
    labels: Object.keys(transactionTypes),
    datasets: [
      {
        data: Object.values(transactionTypes),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: '500px', height: '350px' }}>
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default ChartHome;