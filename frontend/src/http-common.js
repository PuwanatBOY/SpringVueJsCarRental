import axios from "axios";

export default axios.create({
    baseURL: "http://167.71.219.169:9000/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-type": "application/json",
    }
});