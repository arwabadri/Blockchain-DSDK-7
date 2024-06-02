// deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account:', deployer.address);
    // Deploy MetaverseUserProfiles
    const MetaverseUserProfiles = await ethers.getContractFactory('MetaverseUserProfiles');
    const metaverseUserProfiles = await MetaverseUserProfiles.deploy();
    await metaverseUserProfiles.deploy();
    console.log('MetaverseUserProfiles deployed to:', metaverseUserProfiles.address);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });