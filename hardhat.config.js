require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require('@openzeppelin/hardhat-upgrades');


const INFURA_HTTP_URL = process.env.INFURA_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PROJECT_ID = process.env.PROJECT_ID;

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: INFURA_HTTP_URL,
      accounts: [PRIVATE_KEY],
      projectId: PROJECT_ID,
    },
  },
  hardhat: {
  },
  plugins: [
    "@openzeppelin/hardhat-upgrades"
  ]
};
