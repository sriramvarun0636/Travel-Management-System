const BASE_URL = "http://localhost:8000";

export async function getTrips() {
  const res = await fetch(`${BASE_URL}/trips`);
  return await res.json();
}

export async function addTrip(trip) {
  const res = await fetch(`${BASE_URL}/trips`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trip),
  });

  return await res.json();
}

export async function deleteTrip(id) {
  await fetch(`${BASE_URL}/trips/${id}`, {
    method: "DELETE",
  });
}

export async function updateTrip(id, updatedTrip) {
  const res = await fetch(`${BASE_URL}/trips/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTrip),
  });

  return await res.json();
}
