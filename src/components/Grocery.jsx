import React from "react";

const Grocery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 text-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Grocery Page 🛒
        </h1>
        <p className="text-gray-600 text-lg">
          This page is currently under development.
        </p>

        <div className="my-8">
          <div className="animate-bounce text-5xl">⚡</div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Coming Soon...!!!
        </h2>
      </div>
    </div>
  );
};

export default Grocery;
