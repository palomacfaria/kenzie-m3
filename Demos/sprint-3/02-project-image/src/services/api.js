import axios from "axios";

export const photoAPI = axios.create({
    baseURL: "https://photo-fake-api.onrender.com",
    timeout: 5 * 1000
})

