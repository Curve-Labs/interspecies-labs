require("hardhat-deploy");
require("@nomiclabs/hardhat-waffle");
const { ethers } = require("hardhat")
const {GNOSIS_SAFE} = process.env;


async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const ERC20Token = await ethers.getContractFactory("TreeToken");
    const erc20token = await ERC20Token.deploy("TreeToken", "TT");
    const ERC721Token = await ethers.getContractFactory("TreeArtToken");
    const erc721token = await ERC721Token.deploy("TreeArtToken", "TAT");

    console.log("TreeToken address:", erc20token.address);
    console.log("TreeArtToken address:", erc721token.address);

    await erc20token.initialize(GNOSIS_SAFE);
    await erc721token.initialize(GNOSIS_SAFE);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
