const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const EthereumFaucet = await hre.ethers.getContractFactory("EthereumFaucet");
    const faucet = await EthereumFaucet.deploy();

    await faucet.deployed();
    console.log(`Ethereum faucet deployed to address: ${faucet.address}`);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });