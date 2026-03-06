import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchOrders = async () => {
  const response = await apiClient.get('/orders');
  return response.data;
};

export const fetchAuditLogs = async () => {
  const response = await apiClient.get('/audit-logs');
  return response.data;
};

export default apiClient;