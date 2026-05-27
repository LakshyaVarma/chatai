
import axios from "axios";

const api = axios.create({
baseURL: "http://chat-production-995b.up.railway.app/api/chat/response",
withCredentials: true,
});

export default api;