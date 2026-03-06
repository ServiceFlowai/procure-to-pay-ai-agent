import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import OrderManagement from './pages/OrderManagement';
import InvoiceProcessing from './pages/InvoiceProcessing';

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/invoices" element={<InvoiceProcessing />} />
      </Routes>
    </div>
  );
};

export default App;