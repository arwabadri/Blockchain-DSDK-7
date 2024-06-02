const { ethers } = require('hardhat');

async function main() {
  // Compile the contract
  const TrustScoreContract = await ethers.getContractFactory('TrustScoreContract');
  console.log('Deploying TrustScoreContract...');
  const trustScoreContract = await TrustScoreContract.deploy();

  // Wait for the contract to be deployed
  await trustScoreContract.deployed();

  console.log('TrustScoreContract deployed to:', trustScoreContract.address);
}

// Run the deployment function
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
