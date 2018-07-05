import axios from "./index";

export function register(payload) {
    return axios.post("/personal/register",payload);
}






