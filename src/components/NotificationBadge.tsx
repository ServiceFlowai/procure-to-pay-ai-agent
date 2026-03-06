import React from 'react';

const NotificationBadge: React.FC = () => {
  const notifications = [
    { id: 1, message: 'New message from Supplier A', read: false },
    { id: 2, message: 'Order #1234 status changed to Shipped', read: true }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notification-badge">
      <span>Notifications ({unreadCount})</span>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationBadge;