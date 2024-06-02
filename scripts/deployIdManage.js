const fs = require('fs');
const { ethers, upgrades } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const IdentityManagement = await ethers.getContractFactory('IdentityManagement');
  const identityManagement = await upgrades.deployProxy(IdentityManagement, [], { initializer: 'initialize' });

  await identityManagement.deployed();

  console.log(`IdentityManagement deployed to: ${identityManagement.address}`);

  // Saving the contract address to a JSON file for easy reference
  const contractAddress = { IdentityManagement: identityManagement.address };
  fs.writeFileSync('contract-address.json', JSON.stringify(contractAddress, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
