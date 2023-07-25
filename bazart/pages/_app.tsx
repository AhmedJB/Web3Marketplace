import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import getLibrary from "../getLibrary";
import "../styles/global/globals.css";
import 'react-multi-carousel/lib/styles.css';
import { SignProvider } from "../contexts/SignContext";
import Reminder from "../components/Utils/Reminder";
import { QueryClient, QueryClientProvider } from "react-query";
import { AccountProvider } from "../contexts/AccountContext";

function NextWeb3App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()


  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <AccountProvider>
          <SignProvider>
            <Reminder />
            <Component {...pageProps} />
          </SignProvider>
        </AccountProvider>
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default NextWeb3App;