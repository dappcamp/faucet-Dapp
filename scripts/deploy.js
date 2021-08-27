const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const EthereumFaucet = await hre.ethers.getContractFactory("EthereumFaucet");
    const faucet = await EthereumFaucet.deploy();

    await faucet.deployed();
    console.log(`Ethereum faucet deployed to address: ${faucet.address}`);
    updateEnvWithDeployedAddress(faucet.address);

    // We also save the contract's artifacts and address in the proper directory
    saveFrontendFiles(faucet);
}

function saveFrontendFiles(faucet) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../src/abis";
  
    if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir);
    }
  
    const FaucetArtifact = artifacts.readArtifactSync("EthereumFaucet");
  
    fs.writeFileSync(
      contractsDir + "/EthereumFaucet.json",
      JSON.stringify(FaucetArtifact, null, 2)
    );
}

function updateEnvWithDeployedAddress(deployedAddress) {
	const result = require('dotenv').config()
	if (result.error) {
		throw result.error
	}
	result.parsed.DEPLOYED_ADDRESS = deployedAddress;
	fs.writeFileSync('./.env', stringify(result.parsed)) 
}

function stringify(obj) {
	let result = ''
	for (const [key, value] of Object.entries(obj)) {
		if (key) {
			const line = `${key}=${String(value)}`
			result += line + '\n'
		}
	}
	return result
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });