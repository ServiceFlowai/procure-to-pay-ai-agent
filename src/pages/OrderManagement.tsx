import React, { useState } from 'react';

const OrderManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([/* Mock data */]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredOrders = orders.filter(order =>
    order.orderNumber.includes(searchTerm) ||
    order.supplierName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="order-management">
      <h1>Order Management</h1>
      <input
        type="text"
        placeholder="Search orders..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Supplier Name</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.orderNumber}>
              <td>{order.orderNumber}</td>
              <td>{order.supplierName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;