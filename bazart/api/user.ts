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


/* export async function fetchUser(userId) {
    try {
        const response = await axios.get(`/api/user/${userId}`);
        return response.data as UserModelT;
  } catch (e) {
    throw new Error("Failed fetching user");
    return undefined;

  }
} */
