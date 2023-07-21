import { ethers } from 'ethers';


export const verifySignature = (address: string, signature: string) => {
    const signerAddr = ethers.verifyMessage(address, signature);
    if (signerAddr !== address) {
        return false
    } else {
        return true
    }
}