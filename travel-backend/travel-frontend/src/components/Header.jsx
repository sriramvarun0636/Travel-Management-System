import React from "react";

export default function Header({ searchTerm, onSearch }) {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">🌍 Travel Explorer</h1>
        <input
          type="text"
          placeholder="Search by destination..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
        />
      </div>
    </header>
  );
}
