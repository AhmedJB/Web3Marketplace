import { ethers } from 'ethers';
import fs from 'fs'
import path from 'path';


export const verifySignature = (address: string, signature: string) => {
    console.log(`Verifying signature ${signature}`)
    const signerAddr = ethers.verifyMessage(address, signature);
    if (signerAddr !== address) {
        return false
    } else {
        return true
    }
}

export function deleteFile(path_ : string) {
    const filePath = path.resolve(path_);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file ${filePath}: ${err}`);
      } else {
        console.log(`File ${filePath} has been deleted.`);
      }
    });
  }