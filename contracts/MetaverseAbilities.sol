// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AvatarControl {
    struct User {
        uint256 score;
    }
    
    mapping(address => User) public users;

    constructor() {
        users[msg.sender].score = 100; // Initialize score to 100 for contract deployer
    }

    // Function to decrease user score by 10
    function decreaseScore() public {
        users[msg.sender].score -= 10;
    }

    // Function to check if avatar creation is allowed
    function isAvatarCreationAllowed() public view returns (bool) {
        uint256 score = users[msg.sender].score;
        return score >= 50; // Adjust the threshold as needed
    }
}
