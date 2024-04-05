import axios, { Axios } from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
})

export default instance;