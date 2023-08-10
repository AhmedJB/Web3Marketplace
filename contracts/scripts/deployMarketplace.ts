import { ethers } from "hardhat";
import { deployEscrowContract } from "./deployEscrow";
import { Escrow } from "../typechain-types";


const deployMarketplace = async () => {
    //let escrowContract: Escrow = await deployEscrowContract();
    //let add_ = await escrowContract.getAddress();
    let signers = await ethers.getSigners();
    let marketplaceFactory = await ethers.getContractFactory("Marketplace")
    let marketplaceContract = await marketplaceFactory.connect(signers[0]).deploy();
    marketplaceContract.waitForDeployment();
    let  add_ = await marketplaceContract.getEscrowAddress();
    let escrowContract = await ethers.getContractAt("Escrow",add_);
    console.log(`contract Marketplace deployed at ${marketplaceContract.target}`)
    console.log(`contract Escrow deployed at ${add_}`)
    return { marketplaceContract, escrowContract }
}


export { deployMarketplace }