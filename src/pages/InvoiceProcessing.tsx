import React, { useState } from 'react';

const InvoiceProcessing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [invoices, setInvoices] = useState([/* Mock data */]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredInvoices = invoices.filter(invoice =>
    invoice.invoiceNumber.includes(searchTerm) ||
    invoice.supplierName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="invoice-processing">
      <h1>Invoice Processing</h1>
      <input
        type="text"
        placeholder="Search invoices..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Supplier Name</th>
            <th>Invoice Date</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map(invoice => (
            <tr key={invoice.invoiceNumber}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.supplierName}</td>
              <td>{invoice.invoiceDate}</td>
              <td>{invoice.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceProcessing;