// src/components/TripForm.jsx
import React, { useState } from "react";

const TripForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    location: "",
    departure: "",
    return: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(formData);
    setFormData({ location: "", departure: "", return: "" });
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="departure"
        value={formData.departure}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="return"
        value={formData.return}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition"
      >
        Add Trip
      </button>
    </form>
  );
};

export default TripForm;
