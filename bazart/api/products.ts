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
  let keys = Object.keys(body)
  for (let key of keys) {
    form_data.append(key, String(body[key as keyof typeof body]));
  }
  let url = formatEndPoint(`product/create/${address}`)
  console.log(url);
  return axios.post(url, form_data);
}

export const deleteProduct = async ({id,address,signature } : {id :number, address : string,signature : string}) => {
  let url =  formatEndPoint(`product/delete/${id}/${address}/${signature}`)
  console.log("deleting ", url)
  return axios.delete(url,)
}
 
//listing 
export async function fetchProducts() {
  try {
    let response = await axios.get(formatEndPoint('product/list'));
    return response.data as ProductT[];
  } catch (e) {
    throw new Error("Failed fetching products");
  }
}

//details prod
export async function fetchProduct(productId: string) {
  if (!productId || productId.length === 0) {
    throw new Error("Product ID is missing.");
  }

  try {
    let response = await axios.get(formatEndPoint(`product/${productId}`));
    return response.data as ProductDetT;
  } catch (e) {
    throw new Error("Failed fetching product details");
  }
}