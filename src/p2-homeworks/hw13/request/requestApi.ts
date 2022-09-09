import axios from "axios";

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test"
})

export const requestApi = {
    postData(check: boolean) {
        console.log(check)
        return instance.post('', {success: check})
    }
}