interface UserFetchT {
    address: string;
    signature: string;
}

interface UserUpdateT {
    address: string;
    signature: string;
    data: UserT
}