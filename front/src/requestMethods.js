import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="sdfghjkopokjhgbvbn";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const publicResponse = axios.create({
    baseURL : BASE_URL,
    header :{token: `Bearer ${TOKEN}`}
});