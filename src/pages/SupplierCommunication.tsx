import React, { useState } from 'react';

const suppliers = [
  { id: 1, name: 'Supplier A' },
  { id: 2, name: 'Supplier B' },
  { id: 3, name: 'Supplier C' },
];

function SupplierCommunication() {
  const [selectedSupplier, setSelectedSupplier] = useState(suppliers[0].id);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, supplierId: 1, text: 'Hello, we need more details on the order.', timestamp: '2023-10-01 10:00' },
  ]);

  const handleSendMessage = () => {
    const newMessage = {
      id: messages.length + 1,
      supplierId: selectedSupplier,
      text: message,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Supplier Communication</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Supplier</label>
        <select
          value={selectedSupplier}
          onChange={(e) => setSelectedSupplier(Number(e.target.value))}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          rows={4}
        />
      </div>
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Send Message
      </button>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Message Thread</h2>
        <ul className="mt-2">
          {messages.filter(msg => msg.supplierId === selectedSupplier).map((msg) => (
            <li key={msg.id} className="border-b border-gray-200 py-2">
              <p className="text-sm text-gray-700">{msg.text}</p>
              <p className="text-xs text-gray-500">{msg.timestamp}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SupplierCommunication;