import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../../../connectors";
import useMetaMaskOnboarding from "../../../hooks/useMetaMaskOnboarding";
import { AbstractConnector } from '@web3-react/abstract-connector';

type AccountProps = {
  triedToEagerConnect: boolean;
  connector: AbstractConnector;
  isMetamask?: boolean;
  walletName?: string;
  close: () => void;
}


const CustomAccount = ({ triedToEagerConnect, connector, isMetamask, walletName, close }: AccountProps) => {
  const { active, error, activate, chainId, account, setError, deactivate } =
    useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      if (isMetamask) {
        stopOnboarding();
      }

    }
  }, [active, error, stopOnboarding]);



  if (error) {
    console.log("error")
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <button
            className="p-4 bg-mainDark text-white rounded-[10px]"
            disabled={connecting}
            onClick={() => {
              setConnecting(true);
              close()
              activate(connector, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled && isMetamask ? "Connect to MetaMask" : `Connect to ${walletName}`}
          </button>
        ) : (
          <>
            {
              isMetamask && <button onClick={startOnboarding}>Install Metamask</button>
            }
          </>
        )}
      </div>
    );
  } else {
    <h1>Account null</h1>
  }



};

export default CustomAccount;
