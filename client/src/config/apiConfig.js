import axios from "axios";

const jwt=localStorage.getItem("jwt")
export const API_BASE_URL = "https://e-commerce-g46e.onrender.com/";


export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
    }
})