interface ProductT {
  id: number;
  title: string;
  description: string;
  tags: string;
  shippingCost: number;
  shippingFrom: string;
  minimumDeliveryTime: number;
  maximumDeliveryTime: number;
  Price: number;
  quantity: number;
  user?: UserModelT;
  images?: ProductImage[];
  catgId :number;

}
interface ProductImage {
  id: number,
  fileUrl: string,
  filename: string,
}

interface UserProductT {
  id: number;
  firstName: string;
  lastName: string;
  product ?:ProductT;
}


interface ProductDetT {
  id: number;
  title: string;
  description: string;
  shippingCost: number;
  shippingFrom: string;
  minimumDeliveryTime: number;
  maximumDeliveryTime: number;
  Price: number;
  quantity: number;
  //user?: UserModelT;
  userId : number;
  images?: ProductImage[];
  minDays: number;
  maxDays: number;
}

interface UserModelT {
  id: number;
  firstName: string;
  lastName: string;
}

