import axios from "axios";
import {logDOM} from "@testing-library/react";

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test"
})

export const requestApi = {
    postData(check: boolean) {
        console.log(check)
        return instance.post('', {body: {success: check}})
    }
}