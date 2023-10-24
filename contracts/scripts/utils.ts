import { ethers } from "hardhat"
import { Escrow, Marketplace } from "../typechain-types";
import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";

type contracts = Escrow | Marketplace;
const ETHER_PRICE = 0.1;
const SHIPPING_PRICE = ethers.parseUnits(ETHER_PRICE.toString(),"ether");
const PRICE  = ethers.parseUnits(ETHER_PRICE.toString(),"ether");
const QUANTITY = 0;
const PRODUCT_URI = "test";
const PRODUCT_ID = 2;
const BUY_QUANTITY = 2;
const ORDER_ID = 1;



export const getContractWithSigner  = async (name : string, address : string , signer : any) => {
	let contract  = await ethers.getContractAt(name,address,signer);
	return contract;
}

export const getContractWithSignerIndex  = async (name : "Marketplace" | "Escrow", address : string ,index : number) => {
	let signers = await ethers.getSigners();
	let contract : contracts = (await getContractWithSigner(name,address,signers[index])) as unknown as contracts;
	return contract;
}

export const create_product = async  (marketplaceContract : Marketplace,quantity = QUANTITY) => {
	//console.log(`using quantity ${quantity}`)
	let signers = await ethers.getSigners();
	let  tx = await marketplaceContract.connect(signers[1]).createProduct(PRODUCT_ID,PRODUCT_URI,PRICE,SHIPPING_PRICE,quantity);
	await tx.wait(1);
	return tx
}

export const create_order = async (escrowContract : Escrow, marketplaceContract : Marketplace) => {
	let escrowContract2 : Escrow = (await getContractWithSignerIndex("Escrow",escrowContract.target as string,2)) as Escrow;
	let {owner,seller,buyer} = await getAccounts();
		let marketplaceContract2 : Marketplace = (await getContractWithSignerIndex("Marketplace",marketplaceContract.target as string,2)) as Marketplace;
		let tx2 = await marketplaceContract2.buyProduct(PRODUCT_ID,2,ORDER_ID,{
			value : ethers.parseEther(((BUY_QUANTITY * ETHER_PRICE) + ETHER_PRICE ).toString())
		});
		
		await tx2.wait(1);
		return tx2
}

export const calculate_tx_gas = async (tx : any) => {
	let tr_obj  = await tx.getTransaction();
	let gas_used_with_price = BigInt(0);
	if (tr_obj){
		let tr = await ethers.provider.getTransactionReceipt(tr_obj?.hash);
		if (tr){
			console.log(`Used : ${tr.gasUsed}`)
			console.log(`Price of gas ${tr.gasPrice}`)
			gas_used_with_price = tr?.gasUsed * tr.gasPrice;
			console.log("Total gas : ",gas_used_with_price)
		}    
	} 
	return gas_used_with_price;
}

export const getAccounts = async () => {
	let signers = await  ethers.getSigners();
	return {
		owner : signers[0],
		seller : signers[1],
		buyer : signers[2]
	}
}