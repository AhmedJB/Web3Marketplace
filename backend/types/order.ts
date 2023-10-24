export interface OrderDataT {
    sellerId: number;
    buyerAdd: string;
    price: number;
    quantity: number;
    shipping: number;
    productId: number;
}

export interface OrderDataDBT {
    sellerId: number;
    buyerId: number;
    price: number;
    quantity: number;
    shipping: number;
    productId: number;
}