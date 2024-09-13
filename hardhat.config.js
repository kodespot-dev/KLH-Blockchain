require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

PRIVATE_KEY = process.env.PRIVATE_KEY;
PRIVATE_KEY2 = process.env.PRIVATE_KEY2;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://1rpc.io/sepolia",
      accounts: [`0x${PRIVATE_KEY}`]
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [`0x${PRIVATE_KEY}`, `0x${PRIVATE_KEY2}`]
    }
  }
};
