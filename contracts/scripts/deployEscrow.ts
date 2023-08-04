import { ethers } from "hardhat"

async function deployEscrowContract() {
    let signers = await ethers.getSigners();
    let escrowFactory = await ethers.getContractFactory("Escrow")
    let escrowContract = await escrowFactory.connect(signers[0]).deploy();
    escrowContract.waitForDeployment();
    console.log(`contract deployed at ${escrowContract.target}`)
    return escrowContract
}


export {
    deployEscrowContract
}