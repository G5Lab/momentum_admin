import axios from "axios"

const id = sessionStorage.getItem("userId");

export default {
    getUsers() {
        return axios.get(`https://momentum.ng/backend/api/users/${id}`).then(res => {
            return res.data;
        })
    }

}