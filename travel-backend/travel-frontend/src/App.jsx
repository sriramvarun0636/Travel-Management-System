import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TripForm from "./components/TripForm";
import TripList from "./components/TripList";
import {
  fetchTrips,
  addTrip,
  deleteTrip,
  updateTrip,
} from "./api";

export default function App() {
  const [trips, setTrips] = useState([]);
  const [editingTrip, setEditingTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const loadTrips = async () => {
    setLoading(true);
    const data = await fetchTrips();
    setTrips(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTrips();
  }, []);

  const handleAddTrip = async (trip) => {
    await addTrip(trip);
    loadTrips();
  };

  const handleDeleteTrip = async (id) => {
    await deleteTrip(id);
    loadTrips();
  };

  const handleEditTrip = (trip) => {
    setEditingTrip(trip);
  };

  const handleUpdateTrip = async (updatedTrip) => {
    await updateTrip(updatedTrip);
    setEditingTrip(null);
    loadTrips();
  };

  const filteredTrips = trips.filter((trip) =>
    trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#edf4ff] to-white text-gray-800">
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-10">
          <TripForm
            onAddTrip={handleAddTrip}
            onUpdateTrip={handleUpdateTrip}
            editingTrip={editingTrip}
          />
          <TripList
            trips={filteredTrips}
            onDelete={handleDeleteTrip}
            onEdit={handleEditTrip}
            loading={loading}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
