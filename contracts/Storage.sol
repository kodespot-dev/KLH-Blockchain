// SPDX-License-Identifier: GPL-3.0

// pragma solidity >=0.8.2 <0.9.0;
//pragma solidity ^0.8.2;
pragma solidity >=0.8.2;

// This is a comment
/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */

 //Nat-Spec
contract Storage {

    uint256 private number;
    bool private  status;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) private {
        number = num;
    }

    function save(uint256 num) public{
        store(num);
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}