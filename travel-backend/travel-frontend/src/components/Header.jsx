import React from "react";

export const Header = () => {
  return (
    <header className="bg-sky-500 text-white py-6 rounded-b-3xl shadow-md px-8 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
        <span role="img" aria-label="plane">✈️</span> Travel Management System
      </h1>
    </header>
  );
};
