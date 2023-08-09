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
}
interface ProductImage {
  id: number,
  fileUrl: string,
  filename: string,
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
  user?: UserModelT;
  images?: ProductImage[];
  minDays: number;
  maxDays: number;
}

interface UserModelT {
  id: number;
  firstName: string;
  lastName: string;
}
