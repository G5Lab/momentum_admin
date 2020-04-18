import axios from "axios"
/* 
import Vue from 'vue'
import VueCrypt from 'vue-crypt'

Vue.use(VueCrypt) */

const id = sessionStorage.getItem("userId");
const trans_id = sessionStorage.getItem('trans_id')
const jwt = sessionStorage.getItem('jwt')

export default {
    getUsers() {
        return axios.get(`https://momentum.ng/backend/api/users/${id}`).then(res => {
            return res.data;
        })
    },
    getUser_id() {
        return id
    },
    getTrans_Id() {
        return trans_id
    },
    getJwt() {
        return jwt
    },
    reloadPage() {
        console.log("1234");
        location.reload();
    }
}