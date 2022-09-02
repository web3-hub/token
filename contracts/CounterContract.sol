// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract CounterContract {
    uint256 public counter;

    function increment() public {
        counter += 1;
    }
}
