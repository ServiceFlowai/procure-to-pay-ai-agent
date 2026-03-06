import React from 'react';

const App: React.FC = () => {
  const currentTime = new Date().toLocaleString();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600">System Online</h1>
        <p className="mt-2 text-gray-700">{currentTime}</p>
      </div>
    </div>
  );
};

export default App;
