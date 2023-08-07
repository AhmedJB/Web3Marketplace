// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Marketplace} from "./Marketplace.sol";

/**
 * @title Managing Escrow transactions
 * @dev create escrow
 * @dev monitor escrow
 * @dev validate / confirm escrow
 * @dev withdraw / refund funds based on results
 */
contract Escrow {
    /** errors */
    error ESCROW_NOTOWNER();
    error ESCROW_NOTSELLER();
    error ESCROW_NOTBUYER();
    error ESCROW_NOT_FROM_MARKETPLACE();
    error ESCROW_ORDER_NOT_FOUND();

    /** UDT */
    enum EscrowState {
        Opened,
        Finished,
        Refunded
    }

    struct Order {
        address seller;
        address buyer;
        uint256 productId;
        uint256 value;
        uint256 timestamp;
        uint256 orderId;
    }
    struct Product {
        address owner;
        uint256 productId; //  productid
        uint256 price;
        string uri; // localhost:3000/uri/productid
    }

    /** state */
    address owner;
    uint256 constant MIN_HOLD_DURATION = 30 * 24 * 60 * 60; // 30 days in secs
    Marketplace immutable i_marketplace;
    uint256 counter = 1;

    /** mappings */
    mapping(address => Order[]) s_buyerToOrders;
    mapping(address => Order[]) s_sellerToOrders;
    mapping(uint256 => Order) s_OrderIdToOrder;

    /** events */

    /** modifiers */
    modifier onlySeller() {
        _;
    }
    modifier onlyBuyerOrTime() {
        _;
    }
    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert ESCROW_NOTOWNER();
        }
        _;
    }

    modifier onlyMarketplace() {
        if (msg.sender != address(i_marketplace)) {
            revert ESCROW_NOT_FROM_MARKETPLACE();
        }
        _;
    }

    constructor(address _marketplace) {
        owner = msg.sender;
        i_marketplace = Marketplace(_marketplace);
    }

    /**
     * @dev
     * executed by marketplace contract upon executing buyProduct
     */
    function createEscrow(
        address _seller,
        address _buyer,
        uint256 _productId
    ) external payable onlyMarketplace returns (uint256) {
        Order memory order = Order({
            seller: _seller,
            buyer: _buyer,
            productId: _productId,
            value: msg.value,
            timestamp: block.timestamp,
            orderId: counter
        });
        s_buyerToOrders[_buyer].push(order);
        s_sellerToOrders[_seller].push(order);
        s_OrderIdToOrder[counter] = order;
        counter++;
        return order.orderId;
    }

    /**
     * @dev
     * release the funds to seller
     * only executed by buyer or validator Entity
     */
    function release() public onlyBuyerOrTime {}

    /**
     * @dev
     * release the funds back to buyer
     * only executed by seller or validator Entity
     */
    function refund() public onlySeller {}

    /** getters */

    function getSellerOrders() external view returns (Order[] memory) {
        Order[] memory orderList = s_sellerToOrders[msg.sender];
        return orderList;
    }

    function getBuyerOrders() external view returns (Order[] memory) {
        Order[] memory orderList = s_buyerToOrders[msg.sender];
        return orderList;
    }

    function getOrderById(uint256 _orderId) public view returns (Order memory) {
        if (s_OrderIdToOrder[_orderId].seller == address(0)) {
            revert ESCROW_ORDER_NOT_FOUND();
        }
        return s_OrderIdToOrder[_orderId];
    }

    function getMarketplaceAddress() external view returns (address) {
        return address(i_marketplace);
    }
}
