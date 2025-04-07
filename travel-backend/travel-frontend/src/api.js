await fetch("http://localhost:8000/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      destination,
      start_date,
      end_date,
      price,
      description,
    }),
  });
  