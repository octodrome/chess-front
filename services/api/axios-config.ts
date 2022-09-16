import axios from "axios";

const token = localStorage.getItem("token");

export const HTTP = axios.create({
  baseURL: `http://localhost:5000/`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
