import { ethers } from "hardhat";
import { deployEscrowContract } from "./deployEscrow";
import { Escrow } from "../typechain-types";


const deployMarketplace = async () => {
    let escrowContract: Escrow = await deployEscrowContract();
    let add_ = await escrowContract.getAddress();
    let signers = await ethers.getSigners();
    let marketplaceFactory = await ethers.getContractFactory("Marketplace")
    let marketplaceContract = await marketplaceFactory.connect(signers[0]).deploy(add_);
    marketplaceContract.waitForDeployment();
    console.log(`contract deployed at ${marketplaceContract.target}`)
    return { marketplaceContract, escrowContract }
}


export { deployMarketplace }