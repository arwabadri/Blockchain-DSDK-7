pragma solidity ^0.8.20;

contract TrustSystem {
    // Mapping to store trust scores of users
    mapping(address => uint256) public trustScores;

    // Event to log trust score changes
    event TrustScoreDecreased(address indexed user, uint256 newTrustScore);

    // Initialize the trust score to 100 for the contract creator
    constructor() {
        trustScores[msg.sender] = 100;
    }

    // Function to decrease trust score of a user
    function decreaseTrustScore() external {
        // Ensure sender has a non-zero trust score
        require(trustScores[msg.sender] > 0, "User has no trust score");

        // Decrease sender's trust score by 10
        trustScores[msg.sender] -= 10;

        // Emit event to log trust score decrease
        emit TrustScoreDecreased(msg.sender, trustScores[msg.sender]);
    }
}
