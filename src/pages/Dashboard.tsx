import React from 'react';
import NotificationBadge from '../components/NotificationBadge';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <NotificationBadge />
      {/* Other dashboard components */}
    </div>
  );
};

export default Dashboard;