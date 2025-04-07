import React from "react";
import { MapPin, PlaneTakeoff, PlaneLanding } from "lucide-react";

const TripCard = ({ location, departure, return: returnDate }) => (
  <div className="bg-white shadow-xl rounded-2xl p-6 w-72 hover:scale-105 transition-transform duration-300 border border-sky-200">
    <div className="text-sky-600 font-semibold text-lg mb-2 flex items-center gap-2">
      <MapPin size={20} />
      {location}
    </div>
    <div className="text-gray-600 text-sm flex items-center gap-2">
      <PlaneTakeoff size={16} className="text-sky-400" />
      Depart: {departure}
    </div>
    <div className="text-gray-600 text-sm flex items-center gap-2 mt-1">
      <PlaneLanding size={16} className="text-sky-400" />
      Return: {returnDate}
    </div>
  </div>
);

export default TripCard;
