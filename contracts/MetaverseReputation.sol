// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MetaverseReputation is ERC20 {
    constructor() ERC20("Metaverse Reputation", "MR") {
        _mint(msg.sender, 1); // Mint 1 million MR tokens to the deployer
    }
}
