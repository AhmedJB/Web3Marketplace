import { AbstractConnector } from '@web3-react/abstract-connector';
interface WalletT {
    name: string;
    connector: AbstractConnector;
    isMetaMask: boolean;
    eager: boolean;
}