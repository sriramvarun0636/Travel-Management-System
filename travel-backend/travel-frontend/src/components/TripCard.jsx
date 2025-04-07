import React from "react";
import { FaMapMarkerAlt, FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

const TripCard = ({ trip }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80">
      <h2 className="text-xl font-semibold mb-4">{trip.name}</h2>
      <p className="flex items-center mb-2 text-gray-700">
        <FaMapMarkerAlt className="mr-2 text-blue-600" />
        Destination: {trip.destination}
      </p>
      <p className="flex items-center mb-2 text-gray-700">
        <FaPlaneDeparture className="mr-2 text-green-600" />
        Start Date: {trip.startDate}
      </p>
      <p className="flex items-center text-gray-700">
        <FaPlaneArrival className="mr-2 text-red-600" />
        End Date: {trip.endDate}
      </p>
    </div>
  );
};

export default TripCard;
