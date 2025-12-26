# Hardhat NFT Project 💎

The goal of this project is to explore different ways to create Non-Fungible Tokens (NFTs), ranging from simple ERC721 implementations to complex, randomized, and dynamic on-chain assets.

## 🚀 Project Status

| Contract | Status | Description |
| :--- | :---: | :--- |
| **1. Basic NFT** | ✅ Completed | A standard ERC721 Token with static metadata. |
| **2. Random IPFS NFT** | ✅ Completed | "Gacha" style NFT using Chainlink VRF & IPFS. |
| **3. Dynamic SVG NFT** | 🚧 In Progress | NFTs that change based on on-chain data. |

---

## 🐶 1. Basic NFT
This is a standard implementation of an **ERC721** token.
- **Features:** Allows users to mint a simple NFT.
- **Metadata:** Uses a static Token URI pointing to an IPFS JSON file.
- **Goal:** To understand the fundamental structure of the OpenZeppelin ERC721 standard.

## 🎲 2. Random IPFS NFT
This contract implements a **Provably Fair** NFT minting process using **Chainlink VRF** (Verifiable Random Function). It simulates a "Mystery Box" where the user doesn't know which NFT they will get until the transaction is confirmed.

### Features:
- **Verifiable Randomness:** Uses Chainlink VRF to ensure the "randomness" of the mint cannot be manipulated by miners or users.
- **Scarcity/Rarity System:** There are 3 different dog breeds with different probabilities of dropping:
    1.  **Pug** (Super Rare)
    2.  **Shiba Inu** (Rare)
    3.  **St. Bernard** (Common)
- **Decentralized Storage:** Images and Metadata are stored on **IPFS** (InterPlanetary File System) using **Pinata** for pinning.
- **Programmatic Upload:** The deploy script automatically uploads images and metadata to Pinata if they are not already pinned.

---

## 🛠️ Tech Stack & Tools

- **Solidity** - Smart Contract Language
- **Hardhat** - Ethereum Development Environment
- **Ethers.js** - Blockchain Interaction
- **OpenZeppelin** - Standard Contracts (ERC721, Ownable)
- **Chainlink VRF** - On-chain Randomness
- **IPFS & Pinata** - Decentralized Data Storage
- **Mocha & Chai** - Unit Testing

---

## 💿 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone < YOUR_REPO_URL >
cd < YOUR_PROJECT_FOLDER >
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Configure Environment Variables

Create a .env file in the root directory and add the following variables:
```bash
SEPOLIA_RPC_URL=your_rpc_url
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_key
COINMARKETCAP_API_KEY=your_coinmarketcap_key
PINATA_API_KEY=your_pinata_key
PINATA_API_SECRET=your_pinata_secret
UPLOAD_TO_PINATA=true
```

### 4. Compile
```bash
yarn hardhat test
```

## 🧪 Testing
This project includes a comprehensive suite of Unit Tests, especially for the Random IPFS NFT to ensure the randomness and revert logic works as intended.

Run the tests with:
```bash
yarn hardhat test
```

To run a specific test file:
```bash
yarn hardhat test test/unit/< FILE_NAME_TEST >
```

## 📜 Deployment
To deploy the contracts to a local network (Hardhat Network) or a Testnet (e.g., Sepolia):

```bash
# Deploy to Localhost (with Mocks)
yarn hardhat deploy

# Deploy to Testnet (requires .env setup)
yarn hardhat deploy --network sepolia
```
