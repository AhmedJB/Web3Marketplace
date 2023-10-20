
import { loadFixture, time } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"
import { deployMarketplace } from "../../scripts/deployMarketplace"
import { Marketplace,Escrow } from "../../typechain-types";
import { calculate_tx_gas, create_order, create_product, getAccounts, getContractWithSigner, getContractWithSignerIndex } from "../../scripts/utils";
import { JumpType } from "hardhat/internal/hardhat-network/stack-traces/model";


const PRODUCT_ID = 2;
const BUY_QUANTITY = 2;
const PRODUCT_URI = "test";
const ETHER_PRICE = 0.1;
const VALUE  = ethers.parseUnits(ETHER_PRICE.toString(),"ether");
const QUANTITY = 10;
const ORDER_ID = 1;



describe("Testing Escrow Contract", () => {
	
	const orderSetup = async (escrowContract : Escrow, marketplaceContract : Marketplace) => {
		let tx = await create_product(marketplaceContract,10); 
		let _30_days = 30 * 24 * 60 * 60;
		let timestamp = (await time.latest()) + _30_days;
		let tx2 = await create_order(escrowContract,marketplaceContract);
		return {tx,tx2,timestamp}
	}
    
    describe("init values test", () => {
        it("Should have the markeplace address" , async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let add_marketplace = await marketplaceContract.getAddress();
			let add_marketplace_escrow = await escrowContract.getMarketplaceAddress();
			expect(add_marketplace_escrow).to.be.equal(add_marketplace);
		})
		it("Should be the expected owner", async () =>  {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let _owner = await escrowContract.getOwner();
			expect(_owner).to.be.equal(owner.address);
		})
		it("Should Revert when trying to create escrow directly", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let escrowContract2 : Escrow = (await getContractWithSignerIndex("Escrow",escrowContract.target as string,1)) as Escrow;
			let signers = await ethers.getSigners();
			let tx = escrowContract2.createEscrow(signers[0].address,signers[1].address,PRODUCT_ID,ORDER_ID,2);
			await expect(tx).to.be.revertedWithCustomError(escrowContract,"ESCROW_NOT_FROM_MARKETPLACE")
		})
		
    })

	describe("Testing Order interactions and state" , () => {
		it("Should Open Escrow", async () =>  {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			let order = await escrowContract.getOrderById(ORDER_ID);
			expect(order.state).to.be.equal(BigInt(0));
		})
		it("Should be the expected seller" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			let order = await escrowContract.getOrderById(ORDER_ID);
			expect(order.seller).to.be.equal(seller.address);
		}) 
		it("Should be the expected buyer" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			let order = await escrowContract.getOrderById(ORDER_ID);
			expect(order.buyer).to.be.equal(buyer.address);
		})
		it("Should be the expected Value" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			
			let order = await escrowContract.getOrderById(ORDER_ID);
			let expected_value = (BigInt(BUY_QUANTITY) * VALUE) + VALUE;
			expect(expected_value).to.be.equal(order.value);
		}) 
		it("Should be able to start dispute as buyer" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			let b_tx = await escrowContract.connect(buyer).startDispute(ORDER_ID);
			await b_tx.wait(1);
			let order = await escrowContract.connect(buyer).getOrderById(ORDER_ID);
			expect(order.state).to.be.equal(BigInt(3));

		})
		it("Should be able to start dispute as seller" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			let s_tx = await escrowContract.connect(seller).startDispute(ORDER_ID);
			await s_tx.wait(1);
			let order = await escrowContract.connect(seller).getOrderById(ORDER_ID);
			expect(order.state).to.be.equal(BigInt(3));
		})
		it("Should emit an event on dispute" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			let s_tx = await escrowContract.connect(seller).startDispute(ORDER_ID);
			await s_tx.wait(1);
			expect(s_tx).to.emit(escrowContract,"DisputedOrder").withArgs(ORDER_ID);
		})
	})
	describe("Testing release functionality", async () =>  {
		it("Should release the fund", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// after listing product
			let original_balance = await ethers.provider.getBalance(seller.address);
			// buyer release funds
			let b_tx = await escrowContract.connect(buyer).release(ORDER_ID);
			await  b_tx.wait(1);
			let new_balance = await ethers.provider.getBalance(seller.address);
			let order = await escrowContract.connect(buyer).getOrderById(ORDER_ID);
			let expectedBalance = original_balance + order.value;
			expect(new_balance).to.be.equal(expectedBalance);	
		}) 
		it("Should not release funds before 30 days for seller",async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// seller release funds
			let s_tx =  escrowContract.connect(seller).release(ORDER_ID);
			await expect(s_tx).to.be.revertedWithCustomError(escrowContract, "ESCROW_HOLD_TIME")
		})
		it ("Should not allow other uses to release", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			let signers = await ethers.getSigners();
			// Other user release funds
			let s_tx =  escrowContract.connect(signers[4]).release(ORDER_ID);
			await expect(s_tx).to.be.revertedWithCustomError(escrowContract, "ESCROW_NOTBUYER")
		})
		it ("Should release funds after 30 days for seller", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			// after listing product
			let original_balance = await ethers.provider.getBalance(seller.address);
			// manipulate time
			await time.increaseTo(timestamp);
			// seller release funds
			let s_tx = await escrowContract.connect(seller).release(ORDER_ID);
			await s_tx.wait(1);
            let gas_used_with_price = await calculate_tx_gas(s_tx);
			let new_balance = await ethers.provider.getBalance(seller.address);
			let order = await escrowContract.connect(buyer).getOrderById(ORDER_ID);
			let expectedBalance = original_balance + order.value;
			expect(new_balance + gas_used_with_price).to.be.equal(expectedBalance);
		})

		it("Should not allow buyer to release on dispute" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			let s_tx = await escrowContract.connect(seller).startDispute(ORDER_ID);
			await s_tx.wait(1);
			let b_tx = escrowContract.connect(buyer).release(ORDER_ID);

			await expect(b_tx).to.be.revertedWithCustomError(escrowContract,"ESCROW_ALREADY_DISPUTED");
		})
		it("Should not allow owner to release when not disputed" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			let b_tx = escrowContract.connect(owner).release(ORDER_ID);
			await expect(b_tx).to.be.revertedWithCustomError(escrowContract,"ESCROW_NOT_DISPUTED");
		})
		it("Should allow owner to release on dispute" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			// after listing product
			let original_balance = await ethers.provider.getBalance(seller.address);
			let s_tx = await escrowContract.connect(buyer).startDispute(ORDER_ID);
			await s_tx.wait(1);
			let b_tx = await escrowContract.connect(owner).release(ORDER_ID);
			await b_tx.wait(1);
			let new_balance = await ethers.provider.getBalance(seller.address);
			let order = await escrowContract.connect(buyer).getOrderById(ORDER_ID);
			let expectedBalance = original_balance + order.value;
			expect(new_balance).to.be.equal(expectedBalance);
		})
		it("Should Change to finished state", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// buyer release funds
			let b_tx = await escrowContract.connect(buyer).release(ORDER_ID);
			await  b_tx.wait(1);
			let order = await escrowContract.getOrderById(ORDER_ID);
			console.log(`order state ${order.state}`)
			expect(order.state).to.be.equal(BigInt(1));	
		})
		it("Should emit release event", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// buyer release funds
			let b_tx = await escrowContract.connect(buyer).release(ORDER_ID);
			await  b_tx.wait(1);

			expect(b_tx).to.emit(escrowContract,"ReleasedFunds").withArgs(ORDER_ID);
		})
		it("Should not execute release if state is not open or disputed", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// buyer release funds
			let b_tx = await escrowContract.connect(buyer).release(ORDER_ID);
			await  b_tx.wait(1);
			let b_tx2 =  escrowContract.connect(buyer).release(ORDER_ID);
			await  expect(b_tx2).to.be.revertedWithCustomError(escrowContract,"ESCROW_NOT_OPEN_OR_DISPUTED")

		})


		
	}) 
	describe("Testing Refund Functionality ", () => {
		it("Should refund the funds", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// after listing product
			let original_balance = await ethers.provider.getBalance(buyer.address);
			// buyer release funds
			let b_tx = await escrowContract.connect(seller).refund(ORDER_ID);
			await  b_tx.wait(1);
			let new_balance = await ethers.provider.getBalance(buyer.address);
			let order = await escrowContract.getOrderById(ORDER_ID);
			let expectedBalance = original_balance + order.value;
			expect(new_balance).to.be.equal(expectedBalance);	
		}) 
		it("Should Change to refunded state", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// buyer release funds
			let b_tx = await escrowContract.connect(seller).refund(ORDER_ID);
			await  b_tx.wait(1);
			let order = await escrowContract.getOrderById(ORDER_ID);
			expect(order.state).to.be.equal(BigInt(2));	
		})
		it("Should emit refund event", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// buyer release funds
			let b_tx = await escrowContract.connect(seller).refund(ORDER_ID);
			await  b_tx.wait(1);
			
			expect(b_tx).to.emit(escrowContract,"RefundedFunds").withArgs(ORDER_ID);
		})
		it("Should not execute refund if state is not open or disputed", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			// buyer release funds
			let b_tx = await escrowContract.connect(seller).refund(ORDER_ID);
			await  b_tx.wait(1);
			let b_tx2 =  escrowContract.connect(seller).refund(ORDER_ID);
			await  expect(b_tx2).to.be.revertedWithCustomError(escrowContract,"ESCROW_NOT_OPEN_OR_DISPUTED")

		})
		it ("Should not allow other userts to refund", async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2} = await orderSetup(escrowContract,marketplaceContract);
			let signers = await ethers.getSigners();
			// Other user release funds
			let s_tx =  escrowContract.connect(signers[4]).refund(ORDER_ID);
			await expect(s_tx).to.be.revertedWithCustomError(escrowContract, "ESCROW_NOTSELLER")
		})
		it("Should not allow seller to refund on dispute" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			let s_tx = await escrowContract.connect(buyer).startDispute(ORDER_ID);
			await s_tx.wait(1);
			let b_tx = escrowContract.connect(seller).refund(ORDER_ID);

			await expect(b_tx).to.be.revertedWithCustomError(escrowContract,"ESCROW_ALREADY_DISPUTED");
		})
		it("Should not allow owner to refund when not disputed" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			let b_tx = escrowContract.connect(owner).refund(ORDER_ID);
			await expect(b_tx).to.be.revertedWithCustomError(escrowContract,"ESCROW_NOT_DISPUTED");
		})
		it("Should allow owner to refund on dispute" , async () => {
			let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
			let {owner,seller,buyer} = await getAccounts();
			let {tx,tx2,timestamp} = await orderSetup(escrowContract,marketplaceContract);
			// after listing product
			let original_balance = await ethers.provider.getBalance(buyer.address);
			let s_tx = await escrowContract.connect(seller).startDispute(ORDER_ID);
			await s_tx.wait(1);
			let b_tx = await escrowContract.connect(owner).refund(ORDER_ID);
			await b_tx.wait(1);
			let new_balance = await ethers.provider.getBalance(buyer.address);
			let order = await escrowContract.connect(seller).getOrderById(ORDER_ID);
			let expectedBalance = original_balance + order.value;
			expect(new_balance).to.be.equal(expectedBalance);
		})

	})
})