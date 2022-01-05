// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Cont {
    int256 private count = 0;

    function incrementCounter() public {
        count += 1;
    }

    function decrementCounter() public {
        count -= 1;
    }

    function getCount() public view returns (int256) {
        return count;
    }
}
