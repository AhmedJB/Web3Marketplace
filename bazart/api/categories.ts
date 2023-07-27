import axios from "axios";
import { formatEndPoint } from "../utils";


export async function fetchCategories() {
    try {
        let response = await axios.get(formatEndPoint('category/categories'))
        return response.data as CategoryT[]
    } catch (e) {
        throw new Error("Failed fetching categories")
    }


}