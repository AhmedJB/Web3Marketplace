import axios from "axios";
import { formatEndPoint } from "../utils";

type uploadParams = {
    images: File[] | [],
    body: ExtendedProductFormT,
    address: string
}


export const uploadProduct = async ({ images, body, address }: uploadParams) => {
    let form_data = new FormData();

    // supply images
    let image_field = "image";
    for (let i = 0; i < images.length; i++) {
        form_data.append(image_field, images[i], images[i].name);
    }

    // supply body data
    for (let key of Object.keys(body)) {
        form_data.append(key, body[key]);
    }
    let url = formatEndPoint(`product/create/${address}`)
    console.log(url);
    return axios.post(url, form_data);
}