// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "lib/forge-std/src/Test.sol";
import "../contracts/MyToken.sol";

contract CounterTest is Test {
    MyToken public mtk;

    function setUp() public {
        mtk = new MyToken();
    }
}
