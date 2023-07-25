import { ReactNode, createContext, useState } from "react";


type Props = {
    children: ReactNode
}


export const AccountContext = createContext<AccountContextType>(null);


export const AccountProvider = ({ children }: Props) => {
    const [accountData, setAccountData] = useState<AccountDataT | null>(null);

    return <AccountContext.Provider value={{ accountData, setAccountData }}>
        {children}
    </AccountContext.Provider>

}