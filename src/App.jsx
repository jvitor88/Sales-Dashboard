import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/login';
import Dashboard from "./components/pages/dashboard"
import Sales from './components/pages/sales';
import Transactions from './components/pages/transactions';
import Suport from './components/pages/suport';
import Settings from './components/pages/settings';
import Logout from './components/pages/logout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendas" element={<Sales />} />
        <Route path="/transacoes" element={<Transactions />} />
        <Route path="/suporte" element={<Suport />} />
        <Route path="/ajustes" element={<Settings />} />
        <Route path="/sair" element={<Logout />} />
      </Routes>
    </Router>
  )
}

export default App
