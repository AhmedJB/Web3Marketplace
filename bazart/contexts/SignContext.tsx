import { ReactNode, createContext, useState } from "react";


type Props = {
    children: ReactNode
}


export const SignContext = createContext(null);


export const SignProvider = ({ children }: Props) => {
    const [signed, setSigned] = useState(false);

    return <SignContext.Provider value={[signed, setSigned]}>
        {children}
    </SignContext.Provider>

}