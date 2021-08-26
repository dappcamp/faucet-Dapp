# Etherem Faucet

## Setup

### Deploy faucet contract - Local

1. Run local hardhat node 

    `npx hardhat node`

2. Run the following command to deploy faucet on localhost

    `npx hardhat run scripts/deploy.js --network localhost`

3. Copy the contract address printed to console and replace the already existing address in `src/constants.js` with it.


### Deploy faucet contract - Testnet (Rinkeby)

1. Create a file by name `.env` inside the root directory of this project. Paste the following lines inside this .env file

```
ALCHEMY_API_KEY = 'YOUR_ALCHEMY_API_KEY"
WALLET_PRIVATE_KEY = 'YOUR_WALLET_PRIVATE_KEY'
```

2. Replace `YOUR_ALCHEMY_API_KEY` with API key created using Alchemy

3. Replace `YOUR_WALLET_PRIVATE_KEY` with private key obtained by following these steps
    
    1. Click on metamask plugin icon in the browser
    2. Select `Account details`
    3. Click `Export Private Key` button and confirm your password

4. Run the following command to deploy faucet on rinkeby network

    `npx hardhat run scripts/deploy.js --network rinkeby`

5. Copy the contract address printed to console and replace the already existing address in `src/constants.js` with it.

**Note:** You can skip the contract deployment steps and by default the setup would use an already deployed contract.

### Run Project

1. Install dependencies

    `npm install`

2. Run app

    `npm start`

### Common hardhat console commands (If using local network to deploy)

1. Connect to the appropriate network using Hardhat console command
   
   `npx hardhat console --network rinkeby`
    
2. Get balance
    ```bash
    $ let bal = await ethers.provider.getBalance("CONTRACT_ADDR");
    $ bal
    ```
3. Convert balance to ethers
    ```bash
    $ ethers.utils.formatEther(bal);
    ```
