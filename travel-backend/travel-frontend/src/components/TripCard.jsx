import React from "react";
import { MapPin, PlaneTakeoff, PlaneLanding } from "lucide-react";

const TripCard = ({ location, departure, return: returnDate }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-72 hover:scale-105 hover:shadow-2xl hover:shadow-sky-200 transition-all duration-300 border border-sky-100">
      <div className="flex items-center gap-2 text-sky-600 mb-3">
        <MapPin className="w-5 h-5" />
        <h2 className="text-lg font-semibold">{location}</h2>
      </div>
      <div className="flex items-center gap-2 text-gray-700 mb-1">
        <PlaneTakeoff className="w-4 h-4 text-sky-400" />
        <span className="font-medium">Departure:</span>
        <span>{departure}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <PlaneLanding className="w-4 h-4 text-sky-400" />
        <span className="font-medium">Return:</span>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default TripCard;
