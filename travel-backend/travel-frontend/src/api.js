import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // or wherever your FastAPI is running
});

export default api;
