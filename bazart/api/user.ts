import axios from "axios"
import { baseUrl } from "../constants/apiSettings"


export const getUser = async (body: UserFetchT) => {
    let temp = {
        signature: body.signature
    }
    return axios.post(baseUrl + `api/user/${body.address}`, temp);
}


export const updateUser = async (body: UserUpdateT) => {
    let temp = {
        signature: body.signature,
        data: body.data
    }

    return axios.patch(baseUrl + `api/user/${body.address}`, temp);

}