import { ethers } from "hardhat"
import { Escrow, Marketplace } from "../typechain-types";
import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";

type contracts = Escrow | Marketplace;
export const getContractWithSigner  = async (name : string, address : string , signer : any) => {
	let contract  = await ethers.getContractAt(name,address,signer);
	return contract;
}

export const getContractWithSignerIndex  = async (name : "Marketplace" | "Escrow", address : string ,index : number) => {
	let signers = await ethers.getSigners();
	let contract : contracts = (await getContractWithSigner(name,address,signers[index])) as unknown as contracts;
	return contract;
}