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
    error Marketplace__NotEnoughFunds();
    error Marketplace__NotEnoughQuantity();
    error Marketplace__TransferFailed();

    struct Product {
        address owner;
        uint256 productId; //  productid
        uint256 price;
        uint256 quantity;
        string uri; // localhost:3000/uri/productid
    }

    mapping(uint256 productId => Product) productIdToProduct;
    mapping(address owner => Product[]) ownerToProducts;

    Escrow immutable escrowContract;
    address immutable i_owner;

    /** events */
    event CreatedProduct(
        address indexed owner,
        uint indexed productId,
        uint price,
        string uri
    );
    event CreatedOrder(uint indexed orderId);

    constructor() {
        escrowContract = new Escrow(address(this));
        i_owner = msg.sender;
    }

    /**
     * @dev
     * create product for owner and emit an event
     * 1. create product struct
     * 2. link to mappings
     * 3. emit event
     */
    function createProduct(
        uint256 _productId,
        string memory uri,
        uint256 _price,
        uint256 _quantity
    ) public {
        Product memory _product = Product({
            owner: msg.sender,
            productId: _productId,
            price: _price,
            quantity: _quantity,
            uri: uri
        });
        productIdToProduct[_productId] = _product;
        ownerToProducts[msg.sender].push(_product);
        emit CreatedProduct(msg.sender, _productId, _price, uri);
    }

    /**
     * @dev
     * buy the product
     * steps :
     * 1. verify the product price and quantity
     * 2. deposit funds to escrow and create order
     * 3. emit creation event
     */
    function buyProduct(uint256 _productId, uint256 _quantity) public payable {
        Product memory product = getProductById(_productId);
        if (_quantity > product.quantity) {
            revert Marketplace__NotEnoughQuantity();
        }
        if (msg.value < product.price * _quantity) {
            revert Marketplace__NotEnoughFunds();
        }
        uint256 orderId = escrowContract.createEscrow{
            value: product.price * _quantity
        }(product.owner, msg.sender, product.productId);
        uint256 remaining = msg.value - product.price * _quantity;
        if (remaining > 0) {
            (bool success, ) = payable(msg.sender).call{value: remaining}("");
            if (!success) {
                revert Marketplace__TransferFailed();
            }
        }
        emit CreatedOrder(orderId);
    }

    /** getters */

    function getOwner() external view returns (address) {
        return i_owner;
    }

    function getProductById(
        uint256 _productId
    ) public view returns (Product memory) {
        if (productIdToProduct[_productId].owner == address(0)) {
            revert Marketplace__ProductNotFound();
        }
        return productIdToProduct[_productId];
    }

    function getOwnerProducts() external view returns (Product[] memory) {
        Product[] memory productsList = ownerToProducts[msg.sender];
        return productsList;
    }

    function getEscrowAddress() external view returns (address) {
        return address(escrowContract);
    }
}
