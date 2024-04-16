import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Layout from './dashboard/layout';
import NotFound from './dashboard/home/page';

// Importa las otras páginas que deseas renderizar dentro de Dashboard
import Home from './dashboard/home/page';
import Deposit from './dashboard/deposit/page';
import History from './dashboard/history/page';
import PayService from './dashboard/payService/page';
//import Withdraw from '/src/dashboard/withdraw/page';

import Sidebar from "/src/components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="history" element={<History />} />
          <Route path="payService" element={<PayService />} />
          {/* Si deseas agregar la ruta para Withdraw, puedes descomentar la siguiente línea */}
          {/* <Route path="withdraw" element={<Withdraw />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
