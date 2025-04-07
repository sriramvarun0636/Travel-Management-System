import React, { useState } from "react";

const CreateTrip = () => {
  const [formData, setFormData] = useState({
    destination: "",
    description: "",
    start_date: "",
    end_date: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/trips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Trip created:", data);
      alert("Trip created successfully!");
    } catch (err) {
      console.error("Failed to create trip", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Create a New Trip</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <div className="flex gap-4">
          <input
            name="start_date"
            type="date"
            value={formData.start_date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            name="end_date"
            type="date"
            value={formData.end_date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default CreateTrip;
