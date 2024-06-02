// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";


contract IdentityManagement is Initializable{
 //Mapping to store the number of coins earned by each user
    mapping(address => uint256) public userCoins;
    // Mapping to store the reputation of each user.
    mapping(address => uint256) public userReputation;
    // Mapping to store the trust score of each user.
    mapping(address => uint256) public userTrustScore;
    // Mapping to store whether a user is disabled or not.
    mapping(address => bool) public userDisabled;

    // Event to emit when a user earns coins, creates room, acquires goods and when is disabled
    event CoinsEarned(address indexed user, uint256 amount);
    event RoomCreated(address indexed user);
    event GoodsAcquired(address indexed user);
    event UserDisabled(address indexed user);

    // Modifier to ensure that the user is not disabled
    modifier notDisabled() {
        require(!userDisabled[msg.sender], "User is disabled");
        _;
    }

    // Function to initialize the contract
     function initialize() public initializer {
        // Initialize state variables
        userCoins[msg.sender] = 10;
        userReputation[msg.sender] = 10;
        userTrustScore[msg.sender] = 50;
    }

    // Function to allow a user to earn coins
    function earnCoins() external notDisabled {
        userCoins[msg.sender] += 10;
        userReputation[msg.sender] += 5;
        userTrustScore[msg.sender] += 1;
        emit CoinsEarned(msg.sender, 10);
    }

    // Function to disable a user

    function disableUser(address _user) external notDisabled {
        require(userReputation[msg.sender] >= 50, "Not enough reputation");
        userReputation[msg.sender] -= 50;
        userDisabled[_user] = true;
        userTrustScore[_user] -= 10; // Trust score penalty for disabling a user
        emit UserDisabled(_user);
    }
}
