interface UserFetchT {
    address: string;
    signature: string;
}

interface UserUpdateT {
    address: string;
    signature: string;
    data: UserT
}

interface CategoryT {
    id: number;
    title: string;
    imageUrl: string;
}

interface OrderDataT {
    sellerId: number;
    buyerAdd: string;
    price: number;
    quantity: number;
    shipping: number;
    productId: number;
}

interface OrderRespT {
    id :number;
    sellerId: number;
    buyerId: number;
    price: number;
    quantity: number;
    shipping: number;
    productId: number;
}


interface orderParams  {
	address : string | undefined;
	body : {
		signature : string | undefined;
		data  : OrderDataT
	}
}

interface ExtendedProductFormT extends ProductFormT {
    signature: string;
}