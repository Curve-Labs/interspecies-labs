pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol";

contract TreeArtToken is ERC721, Ownable{

    bool initialized = false;

    modifier is_initialized {
        require(initialized == true, "Contract is not initialized");
        _;
    }

    function mintReward(uint256 value, address gainer) public onlyOwner is_initialized{
        _mint(gainer, value);
    }


    function initialize(GnosisSafe owner) public {
        transferOwnership(address(owner));
        initialized = true;
    }

    constructor(string memory _name, string memory _symbol) public ERC721(_name, _symbol) {

    }
}
