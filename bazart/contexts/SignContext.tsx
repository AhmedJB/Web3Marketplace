import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";


type Props = {
    children: ReactNode
}


export const SignContext = createContext<(boolean | Dispatch<SetStateAction<boolean>>)[]>([false]);


export const SignProvider = ({ children }: Props) => {
    const [signed, setSigned] = useState(false);

    return <SignContext.Provider value={[signed, setSigned]}>
        {children}
    </SignContext.Provider>

}