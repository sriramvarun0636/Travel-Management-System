import TripForm from './TripForm';

export default function CreateTrip() {
  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Add a New Trip</h1>
      <TripForm />
    </section>
  );
}
