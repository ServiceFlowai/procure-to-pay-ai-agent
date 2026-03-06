import React, { useState } from 'react';

const InvoiceProcessing = () => {
  const [invoices, setInvoices] = useState([]);
  const [message, setMessage] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Simulate AI processing
      setTimeout(() => {
        setInvoices([...invoices, { id: invoices.length + 1, fileName: files[0].name }]);
        setMessage('Invoice processed successfully!');
      }, 1000);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Invoice Processing</h1>
      <input type="file" onChange={handleFileUpload} className="mb-4" />
      {message && <div className="text-green-500 mb-4">{message}</div>}
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>{invoice.fileName}</li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceProcessing;