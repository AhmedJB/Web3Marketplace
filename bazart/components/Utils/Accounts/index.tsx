import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../../../connectors";
import useENSName from "../../../hooks/useENSName";
import useMetaMaskOnboarding from "../../../hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex } from "../../../util";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
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
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account);

  if (error) {
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

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
          </button>
        ) : (
          <button onClick={startOnboarding}>Install Metamask</button>
        )}
      </div>
    );
  }

  if (false) {
    return (
      <>
        <div className="flex items-center">
          <a
            className="text-white"
            {...{
              href: formatEtherscanLink("Account", [chainId, account]),
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          >
            {ENSName || `${shortenHex(account, 4)}`}
          </a>
          <button
            className="p-3 bg-mainDark text-white"
            onClick={() => deactivate()}
          >
            Logout
          </button>
        </div>


      </>

    );
  }

};

export default Account;
