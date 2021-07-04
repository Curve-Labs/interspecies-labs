pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@gnosis.pm/safe-contracts/contracts/GnosisSafe.sol";

contract TreeToken is ERC20, Ownable {

    bool initialized = false;

    modifier is_initialized {
        require(initialized == true, "Contract is not initialized");
        _;
    }

    function buy() payable public is_initialized{
        _mint(msg.sender, msg.value*10);
    }

    function mintReward(uint256 value, address gainer) public onlyOwner is_initialized{
        _mint(gainer, value);
    }

    function initialize(GnosisSafe owner) public {
        transferOwnership(address(owner));
        initialized = true;
    }

    constructor(string memory _name, string memory _symbol) public ERC20(_name, _symbol) {

    }
}
