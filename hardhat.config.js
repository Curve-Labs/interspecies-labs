require("dotenv").config({path: "./.env"});
require("@nomiclabs/hardhat-waffle");
const {RINKEBY_KEY} = process.env;

/*
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/4c9049736af84c46ad0972910df0476a",
      accounts: [`0x${RINKEBY_KEY}`]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      { version: "0.6.12" },
      { version: "0.5.17" },
    ]
  },
};
