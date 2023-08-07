
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"
import { deployMarketplace } from "../../scripts/deployMarketplace"
import { Marketplace,Escrow } from "../../typechain-types";
import { getContractWithSigner, getContractWithSignerIndex } from "../../scripts/utils";


const PRODUCT_ID = 2;
const PRODUCT_URI = "test";
const ETHER_PRICE = 0.1;
const VALUE  = ethers.parseUnits(ETHER_PRICE.toString(),"ether");
const QUANTITY = 10;



describe("Testing Escrow Contract", () => {
	
    
    describe("init values test", () => {
        it("Should have the markeplace address" , async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let add_marketplace = await marketplaceContract.getAddress();
			let add_marketplace_escrow = await escrowContract.getMarketplaceAddress();
			expect(add_marketplace_escrow).to.be.equal(add_marketplace);
		})
		it("Should Revert when trying to create escrow directly", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let escrowContract2 : Escrow = (await getContractWithSignerIndex("Escrow",escrowContract.target as string,1)) as Escrow;
			let signers = await ethers.getSigners();
			let tx = escrowContract2.createEscrow(signers[0].address,signers[1].address,PRODUCT_ID);
			await expect(tx).to.be.revertedWithCustomError(escrowContract,"ESCROW_NOT_FROM_MARKETPLACE")
		})
    })
})