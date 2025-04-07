import { useEffect, useState } from 'react';
import { getTrips } from '../api';
import TripCard from './TripCard';

export default function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then(setTrips);
  }, []);

  return (
    <section className="flex flex-wrap justify-center p-4 gap-4">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </section>
  );
}

