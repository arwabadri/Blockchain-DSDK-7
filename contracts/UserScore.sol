// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserScore {
    mapping(address => int) public scores;

    function addToScore(address user, int amount) external {
        scores[user] += amount;
    }

    function decreaseScore(address user, int amount) external {
        scores[user] -= amount;
    }
}
