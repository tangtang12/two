import axios from "./index";

export function register(payload) {
    return axios.post("/personal/register",payload);
}

export function login(payload) {
    return axios.post("/personal/login", payload);
}

export function isLogin() {
    return axios.get("/personal/login");
}

export function exitLogin() {
    return axios.get("/personal/out");
}

export function queryInfo() {
    return axios.get("/personal/info");
}



