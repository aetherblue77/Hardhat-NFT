// we can't have these functions in our `helper-hardhat-config`
// since these use the hardhat library
// and it would be a circular dependency
const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else if (e.message.toLowerCase().includes("deprecated v1 endpoint")) {
            console.log("------------------------------------------------")
            console.log(
                "Warning: Automatic verification failed due to Etherscan V1 API deprecation.",
            )
            console.log(
                "Your contract is deployed successfully! You can manually verify it on Etherscan.",
            )
            console.log("------------------------------------------------")
        } else {
            console.log(e)
        }
    }
}

module.exports = {
    verify,
}
