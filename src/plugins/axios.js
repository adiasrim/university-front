import axios from 'axios';
import tokenize from "@/plugins/tokenize";

const instance = axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: 'Bearer ' + tokenize.get()
    }
});

window.axios = instance;