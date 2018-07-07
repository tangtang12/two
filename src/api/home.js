import axios from "./index";


export function query(params) {
	return axios.get("/home/query", {
		params: {
			lx: params
		}
	});
}