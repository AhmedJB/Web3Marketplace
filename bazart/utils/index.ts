import { ethers } from "ethers"
import { ZodIssue } from "zod"



export const getBaseURL = () => {
    console.log("Environnement ", process.env.NEXT_PUBLIC_PRODUCTION)
    let url = process.env.NEXT_PUBLIC_PRODUCTION === "true" ? process.env.NEXT_PUBLIC_PRODUCTION_URL : "http://localhost:5000/"
    return url
}

export const formatEndPoint = (endpoint: string) => {
    let base_url = getBaseURL()
    return base_url + endpoint;
}


export const formatZodError = (errors: ZodIssue[]) => {
    let names = {
        title: 'Title',
        description: 'Description',
        tags: 'Tags',
        shippingCost: 'Shipping Cost',
        shippingFrom: 'Shipping From',
        minimumDeliveryTime: 'Maximum Delivery Time',
        maximumDeliveryTime: 'Minimum Delivery Time',
        Price: 'Price',
        quantity: 'Quantity',
    }
    let msgs: string[] = []
    for (let err of errors) {
        let name = names[err.path[0] as keyof typeof names]
        let msg = `${name} : ${err.message}`
        msgs.push(msg)
    }
    return msgs
}


export const convertToBigInt = (number : number) => {
    const converted  = ethers.utils.parseUnits(number.toString(),"ether");
    return converted;
}

export const formatOderStatus = (index : number) => {
    let states = ['Started','Finished','Refunded','Disputed']
    if (index >= states.length || index < 0){
        return "Unknown"
    }else{
        return states[index];
    }
}