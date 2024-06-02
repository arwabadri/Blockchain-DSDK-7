// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MetaverseUserProfiles {
    mapping(address => string) public usernames;
    mapping(address => uint256) public reputation;

    function setUsername(string memory username) public {
        usernames[msg.sender] = username;
    }

    function getUsername(address user) public view returns (string memory) {
        return usernames[user];
    }

    function addReputation(address user, uint256 amount) public {
        reputation[user] += amount;
    }

    function getReputation(address user) public view returns (uint256) {
        return reputation[user];
    }
}
