import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrderManagement from './pages/OrderManagement';
import InvoiceProcessing from './pages/InvoiceProcessing';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/orders" element={<OrderManagement />} />
      <Route path="/invoices" element={<InvoiceProcessing />} />
    </Routes>
  );
};

export default App;