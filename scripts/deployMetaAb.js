// deployMetaAb.js

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account:', deployer.address);
    // Deploy MetaverseAbilities
    const MetaverseAbilities = await ethers.getContractFactory('AvatarControl');
    const metaverseAbilities = await MetaverseAbilities.deploy();
    await metaverseAbilities.deploy();
    console.log('MetaverseReputation deployed to:', metaverseAbilities.address);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });