// deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account:', deployer.address);
    // Deploy MetaverseCoin
    const MetaverseCoin = await ethers.getContractFactory('MetaverseCoin');
    const metaverseCoin = await MetaverseCoin.deploy();
    await metaverseCoin.deploy();
    console.log('MetaverseCoin deployed to:', metaverseCoin.address);
}
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  