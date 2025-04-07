import { useState } from 'react';
import { addTrip } from '../api';
import { toast } from 'react-hot-toast';

export default function TripForm() {
  const [formData, setFormData] = useState({
    destination: '',
    start_date: '',
    end_date: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrip(formData)
      .then((data) => {
        toast.success('Trip added!');
        setFormData({ destination: '', start_date: '', end_date: '', price: '', description: '' });
      })
      .catch((err) => {
        toast.error('Error adding trip');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto mt-6 space-y-4">
      <input className="w-full p-2 border rounded" name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} required />
      <input className="w-full p-2 border rounded" name="start_date" type="date" value={formData.start_date} onChange={handleChange} required />
      <input className="w-full p-2 border rounded" name="end_date" type="date" value={formData.end_date} onChange={handleChange} required />
      <input className="w-full p-2 border rounded" name="price" type="number" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <textarea className="w-full p-2 border rounded" name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Trip</button>
    </form>
  );
}

