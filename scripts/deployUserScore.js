const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Get the contract factory (compiled contract) from the artifacts
  const TrustSystem = await ethers.getContractFactory('TrustSystem');

  // Deploy the contract
  const trustSystem = await TrustSystem.deploy();

  // Wait for the contract to be deployed
  await trustSystem.deployed();

  console.log('TrustSystem contract deployed to:', trustSystem.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
