import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, orderNumber: 'ORD001', supplier: 'Supplier A', date: '2023-10-01', status: 'Pending' },
    { id: 2, orderNumber: 'ORD002', supplier: 'Supplier B', date: '2023-10-02', status: 'Completed' }
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Order Number</th>
            <th className="py-2">Supplier</th>
            <th className="py-2">Order Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b">
              <td className="py-2">{order.orderNumber}</td>
              <td className="py-2">{order.supplier}</td>
              <td className="py-2">{order.date}</td>
              <td className="py-2">{order.status}</td>
              <td className="py-2">
                <button className="text-blue-500 hover:underline">View Invoices</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;