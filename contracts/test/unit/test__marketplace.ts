
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"
import { deployMarketplace } from "../../scripts/deployMarketplace"
import { Escrow, Marketplace } from "../../typechain-types";
import { calculate_tx_gas, create_order, create_product, getAccounts, getContractWithSignerIndex } from "../../scripts/utils";
import BigNumber from "bignumber.js";


const PRODUCT_ID = 2;
const PRODUCT_URI = "test";
const ETHER_PRICE = 0.1;
const PRICE  = ethers.parseUnits(ETHER_PRICE.toString(),"ether");
const QUANTITY = 0;
const BUY_QUANTITY = 2;


describe("Testing Marketplace Contract", () => {
    

    describe("init values test", () => {
        it("Should have an owner on creation", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let signers = await ethers.getSigners();
            let owner = await marketplaceContract.getOwner();
            expect(owner).to.be.equal(signers[0].address);
        })
        it("Should return an empty product list", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let _arr = await marketplaceContract.getOwnerProducts();
            expect(_arr.length).to.be.equal(0);
        })
        it("Should create a product", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let {owner,seller,buyer} = await getAccounts();
            await create_product(marketplaceContract);
            let _arr = await marketplaceContract.connect(seller).getOwnerProducts();
            expect(_arr.length).to.be.equal(1);
        })
        it("should be the same owner for product",async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            await create_product(marketplaceContract);
            let product = await marketplaceContract.getProductById(PRODUCT_ID);
            let {owner,seller,buyer} = await getAccounts();
            expect(product.owner).to.be.equal(seller.address);
        })
        it("Should emit a creation event", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let tx = await create_product(marketplaceContract);
            let signers = await ethers.getSigners();
            expect(tx).to.emit(marketplaceContract,"CreatedProduct").withArgs(signers[0].address,PRODUCT_ID,PRODUCT_URI);
        })
        it("Should revert with error if id not found", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let tx = marketplaceContract.getProductById(3);
            await expect(tx).to.be.revertedWithCustomError(marketplaceContract,"Marketplace__ProductNotFound");
        })
    })
    describe("Testing interaction with escrow", () => {
        it("Should revert for quantity", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let tx = await create_product(marketplaceContract);
            let escrowContract2 : Escrow = (await getContractWithSignerIndex("Escrow",escrowContract.target as string,1)) as Escrow;
            let marketplaceContract2 : Marketplace = (await getContractWithSignerIndex("Marketplace",marketplaceContract.target as string,1)) as Marketplace;
            let tx2 = marketplaceContract2.buyProduct(PRODUCT_ID,2);
            await expect(tx2).to.be.revertedWithCustomError(marketplaceContract2,"Marketplace__NotEnoughQuantity");
        })
        it("Should revert for value", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let tx = await create_product(marketplaceContract,10);
            let escrowContract2 : Escrow = (await getContractWithSignerIndex("Escrow",escrowContract.target as string,1)) as Escrow;
            let marketplaceContract2 : Marketplace = (await getContractWithSignerIndex("Marketplace",marketplaceContract.target as string,1)) as Marketplace;
            let tx2 = marketplaceContract2.buyProduct(PRODUCT_ID,2);
            await expect(tx2).to.be.revertedWithCustomError(marketplaceContract2,"Marketplace__NotEnoughFunds");
        })
        it("Should refund back the money", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let signers = await ethers.getSigners();
            let user = signers[2];
            let original_balance = await ethers.provider.getBalance(user.address)
                
            let tx = await create_product(marketplaceContract,10);
            
            let tx2 = await create_order(escrowContract,marketplaceContract);
            // calculate the gas consumed by the transaction
            /* let tr_obj  = await tx2.getTransaction();
            let gas_used_with_price = BigInt(0);
            if (tr_obj){
                let tr = await ethers.provider.getTransactionReceipt(tr_obj?.hash);
                if (tr){
                    console.log(`Used : ${tr.gasUsed}`)
                    console.log(`Price of gas ${tr.gasPrice}`)
                    gas_used_with_price = tr?.gasUsed * tr.gasPrice;
                    console.log("Total gas : ",gas_used_with_price)
                }    
            }  */
            let gas_used_with_price = await calculate_tx_gas(tx2);

            let converted_ether_price = ethers.parseEther(ETHER_PRICE.toString());
            let orderPrice = BigInt(BUY_QUANTITY)  * converted_ether_price;
            let expectedBalance = original_balance - orderPrice;
            let newUserBalance = await ethers.provider.getBalance(user.address) 
            // test if new balance + gas used === balance - cost     
            expect(newUserBalance + gas_used_with_price).to.be.equal(expectedBalance);
        })
        it("Should emit a created event", async ()  => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let signers = await ethers.getSigners();
            let user = signers[1];
            let original_balance = await ethers.provider.getBalance(user.address)        
            let tx = await create_product(marketplaceContract,10);   
            let tx2 = await create_order(escrowContract,marketplaceContract);
            expect(tx2).to.emit(marketplaceContract,"CreatedOrder").withArgs(1);
        })
    })
})