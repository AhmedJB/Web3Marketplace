// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Marketplace} from "./Marketplace.sol";
import {console} from "hardhat/console.sol";

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
    error ESCROW_HOLD_TIME();
    error ESCROW_ALREADY_DISPUTED();
    error ESCROW_NOT_DISPUTED();
    error ESCROW_NOT_OPEN();
    error ESCROW_NOT_OPEN_OR_DISPUTED();
    error ESCROW_NOT_SELLER_OR_BUYER();
    error ESCROW_FAILED_TRANSFER();

    /** UDT */
    enum EscrowState {
        Opened, // 0
        Finished,
        Refunded,
        Disputed
    }

    struct Order {
        address seller;
        address buyer;
        uint256 productId;
        uint256 value;
        uint256 timestamp;
        uint256 orderId;
        EscrowState state;
    }
    struct Product {
        address owner;
        uint256 productId; //  productid
        uint256 price;
        string uri; // localhost:3000/uri/productid
    }

    /** state */
    address owner;
    uint256 constant MIN_HOLD_DURATION = 30 days; // 30 days in secs
    Marketplace immutable i_marketplace;
    uint256 counter = 1;

    /** mappings */
    mapping(address => Order[]) s_buyerToOrders;
    mapping(address => Order[]) s_sellerToOrders;
    mapping(uint256 => Order) s_OrderIdToOrder;

    /** events */
    event DisputedOrder(uint256 indexed _orderId);
    event ReleasedFunds(uint256 indexed _orderId);
    event RefundedFunds(uint256 indexed _orderId);

    /** modifiers */
    modifier onlySellerOrDisputed(uint256 _orderId) {
        Order memory order = s_OrderIdToOrder[_orderId];
        if (msg.sender == owner && order.state != EscrowState.Disputed) {
            revert ESCROW_NOT_DISPUTED();
        } else if (order.seller != msg.sender && msg.sender != owner) {
            revert ESCROW_NOTSELLER();
        } else if (
            msg.sender == order.seller && order.state == EscrowState.Disputed
        ) {
            revert ESCROW_ALREADY_DISPUTED();
        }
        _;
    }

    modifier orderOpenOrDisputed(uint256 _orderId) {
        Order memory order = s_OrderIdToOrder[_orderId];
        //console.log("order state ", uint(order.state));
        if (
            order.state != EscrowState.Opened &&
            order.state != EscrowState.Disputed
        ) {
            revert ESCROW_NOT_OPEN_OR_DISPUTED();
        }
        _;
    }

    /**
     * @dev
     * check if the function called by the order Buyer
     * or order hold duration completed
     * steps:
     * 1.
     */
    modifier onlyBuyerOrTimeOrDisputed(uint256 _orderId) {
        Order memory order = s_OrderIdToOrder[_orderId];
        if (msg.sender == owner && order.state != EscrowState.Disputed) {
            revert ESCROW_NOT_DISPUTED();
        } else if (order.seller == msg.sender) {
            if ((block.timestamp - order.timestamp) < MIN_HOLD_DURATION) {
                revert ESCROW_HOLD_TIME();
            }
        } else if (order.buyer != msg.sender && msg.sender != owner) {
            revert ESCROW_NOTBUYER();
        } else if (
            msg.sender == order.buyer && order.state == EscrowState.Disputed
        ) {
            revert ESCROW_ALREADY_DISPUTED();
        }
        _;
    }

    modifier onlySellerOrBuyer(uint256 _orderId) {
        Order memory order = s_OrderIdToOrder[_orderId];
        if (msg.sender != order.seller && msg.sender != order.buyer) {
            revert ESCROW_NOT_SELLER_OR_BUYER();
        }
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

    constructor(address _marketplace, address _owner) {
        owner = _owner;
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
            orderId: counter,
            state: EscrowState.Opened
        });
        s_buyerToOrders[_buyer].push(order);
        s_sellerToOrders[_seller].push(order);
        s_OrderIdToOrder[counter] = order;
        counter++;
        return order.orderId;
    }

    /**
     * @dev
     * start dispute
     * modifying the order state requires the storage keyword
     * to persist changes
     */
    function startDispute(uint256 _orderId) public onlySellerOrBuyer(_orderId) {
        Order storage order = s_OrderIdToOrder[_orderId];
        if (order.state != EscrowState.Opened) {
            revert ESCROW_NOT_OPEN();
        }
        order.state = EscrowState.Disputed;
        emit DisputedOrder(_orderId);
    }

    /**
     * @dev
     * release the funds to seller
     * only executed by buyer or validator Entity
     */
    function release(
        uint256 _orderId
    ) public orderOpenOrDisputed(_orderId) onlyBuyerOrTimeOrDisputed(_orderId) {
        Order storage order = s_OrderIdToOrder[_orderId];
        // checks
        // effects
        order.state = EscrowState.Finished;
        // interactions
        (bool success, ) = order.seller.call{value: order.value}("");
        if (!success) {
            revert ESCROW_FAILED_TRANSFER();
        }
        emit ReleasedFunds(_orderId);
    }

    /**
     * @dev
     * release the funds back to buyer
     * only executed by seller or validator Entity (owner) when disputed
     */
    function refund(
        uint256 _orderId
    ) public orderOpenOrDisputed(_orderId) onlySellerOrDisputed(_orderId) {
        Order storage order = s_OrderIdToOrder[_orderId];
        // checks
        // effects
        order.state = EscrowState.Refunded;
        // interactions
        (bool success, ) = order.buyer.call{value: order.value}("");
        if (!success) {
            revert ESCROW_FAILED_TRANSFER();
        }
        emit RefundedFunds(_orderId);
    }

    /** Fallback / receive */

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

    function getOwner() external view returns (address) {
        return owner;
    }
}
