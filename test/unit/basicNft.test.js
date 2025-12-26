const { assert } = require("chai")
const { developmentChains } = require("../../helper-hardhat-config")
const { ethers, network, deployments } = require("hardhat")

describe("Basic NFT Unit Tests", async function () {
    let basicNft, deployer

    beforeEach(async () => {
        const accounts = await ethers.getSigners()
        deployer = accounts[0]

        await deployments.fixture(["mock", "basicnft"])

        basicNft = await ethers.getContract("BasicNft")
    })

    it("Allows users to mint an NFT and updates appropriately", async function () {
        const txResponse = await basicNft.mintNft()
        await txResponse.wait(1)
        const tokenURI = await basicNft.tokenURI(0)
        const tokenCounter = await basicNft.getTokenCounter()
        assert.equal(tokenCounter.toString(), "1")
        assert.equal(tokenURI, await basicNft.TOKEN_URI())
    })
}) 