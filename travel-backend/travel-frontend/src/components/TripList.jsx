import React from "react";
import TripCard from "./TripCard";

const TripsList = ({ trips }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Available Trips</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {trips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default TripsList;
