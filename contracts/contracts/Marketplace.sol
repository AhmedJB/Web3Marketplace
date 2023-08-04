// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

// Layout of Contract:
// version
// imports
// errors
// interfaces, libraries, contracts
// Type declarations
// State variables
// Events
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// view & pure functions

/** imports */

import {Escrow} from "./Escrow.sol";

contract Marketplace {
    /** errors */
    error Marketplace__ProductNotFound();

    struct products {
        address owner;
        uint256 productId; //  productid
        string uri; // localhost:3000/uri/productid
    }

    mapping(uint256 productId => products) productIdToProduct;
    mapping(address owner => products[]) ownerToProducts;

    Escrow immutable escrowContract;
    address immutable i_owner;

    constructor(address _escrow) {
        escrowContract = Escrow(_escrow);
        i_owner = msg.sender;
    }

    function createProduct() public {}

    function buyProduct() public payable {
        /**
         * create a buy transaction state
         * deposit funds to escrow
         */
        /** escrow */
    }

    /** getters */

    function getOwner() external view returns (address) {
        return i_owner;
    }
}
