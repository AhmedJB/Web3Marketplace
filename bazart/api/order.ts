import axios from "axios";
import { formatEndPoint } from "../utils";




export const createOrder = async ({address,body} : orderParams) => {
	let url = formatEndPoint(`order/create/${address}`)
  	console.log(url);
	return axios.post(url,body);
}

export const deleteOrder = async ({id,address,signature } : {id :number, address : string | undefined,signature : string | undefined}) => {
	let url =  formatEndPoint(`order/delete/${id}/${address}/${signature}`)
	console.log("deleting ", url)
	return axios.delete(url)
  }

export const getMyOrders = async ({address,signature,isSeller} : {
	address : string | undefined,
	signature : string | undefined,
	isSeller : boolean
  }) => {
	try {

	  let url = formatEndPoint(`order/${isSeller ? "mysellings":"mybuyings"}/${address}/${signature}`)
	  const response = await axios.get(url); // Adjust the API endpoint
	  return response.data as OrderRespT[];
	} catch (error) {
	  throw new Error("Failed fetching Orders");
	}
  }