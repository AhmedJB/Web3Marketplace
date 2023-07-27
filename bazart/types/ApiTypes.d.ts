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


interface ExtendedProductFormT extends ProductFormT {
    signature: string;
}