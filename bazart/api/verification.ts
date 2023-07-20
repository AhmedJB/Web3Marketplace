import axios from "axios"
import { baseUrl } from "../constants/apiSettings"

export const verify = async (body: VerificationT) => {
    return axios.post(baseUrl + "verify/", body);
}