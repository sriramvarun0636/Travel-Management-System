import React, { useEffect, useState } from "react";
import TripCard from "./TripCard";
import { Header } from "./Header";
import { Footer } from "./Footer";
import api from "../api";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    api.get("/trips")
      .then((res) => setTrips(res.data))
      .catch((err) => console.error("Error fetching trips:", err));
  }, []);

  return (
    <div className="flex flex-col items-center px-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map((trip, index) => (
          <TripCard key={index} {...trip} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TripList;
