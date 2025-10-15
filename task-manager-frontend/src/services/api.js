import axios from "axios";

// Use environment variable for flexibility
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
  }
);

export const taskService = {
  getTasks: (params) => api.get("/task", { params }),
  createTask: (data) => api.post("/task", data),
  updateTask: (id, data) => api.put(`/task/${id}`, data),
  deleteTask: (id) => api.delete(`/task/${id}`),
};

export const userService = {
  getUsers: () => api.get("/user"),
  createUser: (data) => api.post("/user", data),
};

export default api;
