import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"
import { deployMarketplace } from "../../scripts/deployMarketplace"



describe("Testing Marketplace Contract", () => {
    describe("init values test", () => {
        it("Should have an owner on creation", async () => {
            let { marketplaceContract, escrowContract } = await loadFixture(deployMarketplace);
            let signers = await ethers.getSigners();
            let owner = await marketplaceContract.getOwner();
            expect(owner).to.be.equal(signers[0].address);
        })
    })
})