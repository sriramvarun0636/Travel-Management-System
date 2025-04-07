import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TripCard from "./TripCard";
import TripForm from "./TripForm";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    try {
      const res = await fetch("http://localhost:8000/trips");
      const data = await res.json();
      setTrips(data);
    } catch (err) {
      console.error("Failed to fetch trips:", err);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const addTrip = (newTrip) => {
    setTrips((prev) => [newTrip, ...prev]);
  };

  return (
    <>
      <Header />
      <section className="flex flex-col items-center py-8 px-4 gap-8">
        <TripForm onNewTrip={addTrip} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TripList;
