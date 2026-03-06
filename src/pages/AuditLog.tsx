import React, { useState, useEffect } from 'react';

const AuditLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Mock data fetching
    setLogs([
      { id: 1, userId: 'user1', action: 'Created Order', timestamp: '2023-10-01T12:00:00Z', entity: 'Order #123' },
      { id: 2, userId: 'user2', action: 'Updated Invoice', timestamp: '2023-10-02T15:30:00Z', entity: 'Invoice #456' },
    ]);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Audit Log</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">User ID</th>
            <th className="py-2">Action</th>
            <th className="py-2">Timestamp</th>
            <th className="py-2">Entity</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td className="border px-4 py-2">{log.userId}</td>
              <td className="border px-4 py-2">{log.action}</td>
              <td className="border px-4 py-2">{new Date(log.timestamp).toLocaleString()}</td>
              <td className="border px-4 py-2">{log.entity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLog;