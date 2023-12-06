import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/pages/login';
import Dashboard from "./components/pages/dashboard"
import Sales from './components/pages/sales';
import Transactions from './components/pages/transactions';
import Suport from './components/pages/suport';
import Settings from './components/pages/settings';
import Logout from './components/pages/logout';
import { useState } from 'react';

function App() {

  const [userEmail, setUserEmail] = useState('user@business.com')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserEmail={setUserEmail} />} />
        <Route path="/dashboard" element={<Dashboard userEmail={userEmail} />} />
        <Route path="/vendas" element={<Sales userEmail={userEmail} />} />
        <Route path="/transacoes" element={<Transactions userEmail={userEmail} />} />
        <Route path="/suporte" element={<Suport userEmail={userEmail} />} />
        <Route path="/ajustes" element={<Settings userEmail={userEmail} />} />
        <Route path="/sair" element={<Logout userEmail={userEmail} />} />
      </Routes>
    </Router>
  )
}

export default App
