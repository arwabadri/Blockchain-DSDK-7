// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
 import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

 contract MyNFT is ERC721 {

    constructor() ERC721 ("My NFT", "MNFT") {
        //mint an NFT to yourself
        _mint(msg.sender, 1);
    }
 }