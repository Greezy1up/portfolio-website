import React from "react";

export const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
      <p className="text-lg mb-4">Here are some of my projects:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">Project 1</div>
        <div className="bg-white p-4 rounded shadow">Project 2</div>
        <div className="bg-white p-4 rounded shadow">Project 3</div>
      </div>
    </div>
  );
};
