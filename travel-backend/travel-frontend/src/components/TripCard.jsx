export default function TripCard({ trip }) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-4 m-2 w-full max-w-md">
        <h2 className="text-xl font-semibold text-blue-700">{trip.destination}</h2>
        <p className="text-sm text-gray-600">{trip.description}</p>
        <p className="text-sm">📅 {trip.start_date} → {trip.end_date}</p>
        <p className="text-sm">💰 ${trip.price}</p>
      </div>
    );
  }
  