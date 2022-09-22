// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Token.sol";

// see also https://ethereum.org/en/developers/tutorials/transfers-and-approval-of-erc-20-tokens-from-a-solidity-smart-contract/

contract Seller {
    Token public token;

    constructor() {
        token = new Token('Test', 'TEST', 1000 ether);
    }

    function sell() public payable {
        // todo: add require checks
        token.transfer(msg.sender, msg.value);
    }

    receive() external payable {
        sell();
    }

    function withdraw() external {
        // fixme: implement
    }
}