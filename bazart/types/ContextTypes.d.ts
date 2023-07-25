interface AccountDataObjT {
    signature: string;
    address: string;
}

type AccountDataT = AccountDataObjT | null


interface AccountContextType {
    accountData: AccountDataT | null,
    setAccountData: (obj: AccountDataObjT) => void
}