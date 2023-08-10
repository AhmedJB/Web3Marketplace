/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Escrow, EscrowInterface } from "../Escrow";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketplace",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ESCROW_ALREADY_DISPUTED",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_FAILED_TRANSFER",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_HOLD_TIME",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_NOTBUYER",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_NOTOWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_NOTSELLER",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_NOT_DISPUTED",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_NOT_FROM_MARKETPLACE",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_NOT_OPEN",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_NOT_OPEN_OR_DISPUTED",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_NOT_SELLER_OR_BUYER",
    type: "error",
  },
  {
    inputs: [],
    name: "ESCROW_ORDER_NOT_FOUND",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "DisputedOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "RefundedFunds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "ReleasedFunds",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_productId",
        type: "uint256",
      },
    ],
    name: "createEscrow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBuyerOrders",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "productId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            internalType: "enum Escrow.EscrowState",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct Escrow.Order[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMarketplaceAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "getOrderById",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "productId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            internalType: "enum Escrow.EscrowState",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct Escrow.Order",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSellerOrders",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "productId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "orderId",
            type: "uint256",
          },
          {
            internalType: "enum Escrow.EscrowState",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct Escrow.Order[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "startDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Escrow__factory {
  static readonly abi = _abi;
  static createInterface(): EscrowInterface {
    return new utils.Interface(_abi) as EscrowInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow;
  }
}