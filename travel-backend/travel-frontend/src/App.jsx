import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function App() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    start_date: "",
    end_date: "",
  });

  const fetchTrips = async () => {
    try {
      const res = await fetch("http://localhost:8000/trips");
      const data = await res.json();
      setTrips(data);
    } catch (err) {
      toast.error("Failed to fetch trips");
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/trips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add trip");
      toast.success("Trip added!");
      setForm({
        title: "",
        description: "",
        location: "",
        start_date: "",
        end_date: "",
      });
      fetchTrips();
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-3xl font-bold mb-6 text-center">🌍 Travel Management</header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add Trip</h2>
          <div className="space-y-3">
            {["title", "description", "location", "start_date", "end_date"].map((field) => (
              <input
                key={field}
                type={field.includes("date") ? "date" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={field.replace("_", " ")}
                className="w-full p-2 border rounded"
              />
            ))}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {loading ? "Adding..." : "Add Trip"}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">All Trips</h2>
          <div className="space-y-4">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white p-4 rounded-xl shadow">
                <h3 className="text-lg font-bold">{trip.title}</h3>
                <p>{trip.description}</p>
                <p className="text-sm text-gray-600">{trip.location}</p>
                <p className="text-sm text-gray-500">
                  {trip.start_date} → {trip.end_date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
