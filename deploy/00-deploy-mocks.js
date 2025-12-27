const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

const DECIMALS = "18"
const INITIAL_PRICE = ethers.utils.parseUnits("2000", "ether")

const BASE_FEE = ethers.utils.parseEther("0.25") // 0.25 is this the premium in LINK
const GAS_PRICE_LINK = 1e9 // 0.000000001 LINK per gas
const WEI_PER_UNIT_LINK = ethers.utils.parseEther("1") // 1 LINK = 1 ETH (Mock)

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK, WEI_PER_UNIT_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local Network Detected! Deploying Mocks...")
        // Deploy a Mock vrfCoordinator...
        await deploy("VRFCoordinatorV2_5Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        await deploy("MockV3Aggregator", {
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        })
        log("Mocks Deployed!")
        log("------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
