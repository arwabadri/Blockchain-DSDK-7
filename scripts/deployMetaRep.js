// deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account:', deployer.address);
    // Deploy MetaverseReputation
    const MetaverseReputation = await ethers.getContractFactory('MetaverseReputation');
    const metaverseReputation = await MetaverseReputation.deploy();
    await metaverseReputation.deploy();
    console.log('MetaverseReputation deployed to:', metaverseReputation.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });