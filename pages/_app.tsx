/*import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import getLibrary from "../getLibrary";
import "../styles/global/globals.css";

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default NextWeb3App;
*/

/*import React from 'react';
import CarouselComponent from './CarouselComponent';
/*import styles from './App.module.css'; 
import CarouselComponent2 from './CarouselComponent2';
import './globals2.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp


function App() {
  return 
  (
    <div>
       <CarouselComponent />
       <CarouselComponent2 />

    </div>
     
  );
}

export default App;
*/

import React from 'react';
import CarouselComponent from './CarouselComponent';

import './globals.css';


function App() {
  return (
    <div>
      <CarouselComponent />
    </div>
  );
}

export default App;
