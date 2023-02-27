import axios from "axios";

const backendApi = () => {
    return axios.create({
        baseURL: "http://localhost:8080/",
        withCredentials: true
    })
}

export {backendApi}
