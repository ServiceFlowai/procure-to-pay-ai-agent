import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { LucideIcon } from 'lucide-react';

const data = [
  { name: 'Completed', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Overdue', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Order Status</h2>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Invoice Processing Times</h2>
          <p>Average: 2 days</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Supplier Communications</h2>
          <p>New Messages: 5</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;