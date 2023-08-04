interface ProductT {
  id: number;
  title: string;
  firstName: string; 
  lastName: string;
  user?:UserModelT;
  shippingFrom: string;
  productImagee: string;
  Price: number;
  images?: ProductImage[];
}
interface ProductImage {
  id:number,
  fileUrl:string,
  filename:string,
}

interface ProductDetT {
  id: number;
  title: string;
  description: string;
  shippingCost: number;
  shippingFrom: string;
  minimumDeliveryTime: number;
  maximumDeliveryTime: number;
  quantity:number;
/*   productImage: string;
 */  Price: number; 
/*   images: ProductImage[]; // Assuming ProductImage is a custom type defined somewhere
 */  minDays: number;
  maxDays: number;
}



interface UserModelT{
  id : number;
  firstName : string;
  lastName:string;
}
