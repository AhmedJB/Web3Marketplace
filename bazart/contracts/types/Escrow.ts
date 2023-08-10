/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Escrow {
  export type OrderStruct = {
    seller: PromiseOrValue<string>;
    buyer: PromiseOrValue<string>;
    productId: PromiseOrValue<BigNumberish>;
    value: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
    orderId: PromiseOrValue<BigNumberish>;
    state: PromiseOrValue<BigNumberish>;
  };

  export type OrderStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number
  ] & {
    seller: string;
    buyer: string;
    productId: BigNumber;
    value: BigNumber;
    timestamp: BigNumber;
    orderId: BigNumber;
    state: number;
  };
}

export interface EscrowInterface extends utils.Interface {
  functions: {
    "createEscrow(address,address,uint256)": FunctionFragment;
    "getBuyerOrders()": FunctionFragment;
    "getMarketplaceAddress()": FunctionFragment;
    "getOrderById(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getSellerOrders()": FunctionFragment;
    "refund(uint256)": FunctionFragment;
    "release(uint256)": FunctionFragment;
    "startDispute(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createEscrow"
      | "getBuyerOrders"
      | "getMarketplaceAddress"
      | "getOrderById"
      | "getOwner"
      | "getSellerOrders"
      | "refund"
      | "release"
      | "startDispute"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createEscrow",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyerOrders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketplaceAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSellerOrders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "refund",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startDispute",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createEscrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyerOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketplaceAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSellerOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startDispute",
    data: BytesLike
  ): Result;

  events: {
    "DisputedOrder(uint256)": EventFragment;
    "RefundedFunds(uint256)": EventFragment;
    "ReleasedFunds(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DisputedOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundedFunds"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReleasedFunds"): EventFragment;
}

export interface DisputedOrderEventObject {
  _orderId: BigNumber;
}
export type DisputedOrderEvent = TypedEvent<
  [BigNumber],
  DisputedOrderEventObject
>;

export type DisputedOrderEventFilter = TypedEventFilter<DisputedOrderEvent>;

export interface RefundedFundsEventObject {
  _orderId: BigNumber;
}
export type RefundedFundsEvent = TypedEvent<
  [BigNumber],
  RefundedFundsEventObject
>;

export type RefundedFundsEventFilter = TypedEventFilter<RefundedFundsEvent>;

export interface ReleasedFundsEventObject {
  _orderId: BigNumber;
}
export type ReleasedFundsEvent = TypedEvent<
  [BigNumber],
  ReleasedFundsEventObject
>;

export type ReleasedFundsEventFilter = TypedEventFilter<ReleasedFundsEvent>;

export interface Escrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EscrowInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createEscrow(
      _seller: PromiseOrValue<string>,
      _buyer: PromiseOrValue<string>,
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBuyerOrders(
      overrides?: CallOverrides
    ): Promise<[Escrow.OrderStructOutput[]]>;

    getMarketplaceAddress(overrides?: CallOverrides): Promise<[string]>;

    getOrderById(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Escrow.OrderStructOutput]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getSellerOrders(
      overrides?: CallOverrides
    ): Promise<[Escrow.OrderStructOutput[]]>;

    refund(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    release(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startDispute(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createEscrow(
    _seller: PromiseOrValue<string>,
    _buyer: PromiseOrValue<string>,
    _productId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBuyerOrders(
    overrides?: CallOverrides
  ): Promise<Escrow.OrderStructOutput[]>;

  getMarketplaceAddress(overrides?: CallOverrides): Promise<string>;

  getOrderById(
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Escrow.OrderStructOutput>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getSellerOrders(
    overrides?: CallOverrides
  ): Promise<Escrow.OrderStructOutput[]>;

  refund(
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  release(
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startDispute(
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createEscrow(
      _seller: PromiseOrValue<string>,
      _buyer: PromiseOrValue<string>,
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBuyerOrders(
      overrides?: CallOverrides
    ): Promise<Escrow.OrderStructOutput[]>;

    getMarketplaceAddress(overrides?: CallOverrides): Promise<string>;

    getOrderById(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Escrow.OrderStructOutput>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getSellerOrders(
      overrides?: CallOverrides
    ): Promise<Escrow.OrderStructOutput[]>;

    refund(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    release(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startDispute(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DisputedOrder(uint256)"(
      _orderId?: PromiseOrValue<BigNumberish> | null
    ): DisputedOrderEventFilter;
    DisputedOrder(
      _orderId?: PromiseOrValue<BigNumberish> | null
    ): DisputedOrderEventFilter;

    "RefundedFunds(uint256)"(
      _orderId?: PromiseOrValue<BigNumberish> | null
    ): RefundedFundsEventFilter;
    RefundedFunds(
      _orderId?: PromiseOrValue<BigNumberish> | null
    ): RefundedFundsEventFilter;

    "ReleasedFunds(uint256)"(
      _orderId?: PromiseOrValue<BigNumberish> | null
    ): ReleasedFundsEventFilter;
    ReleasedFunds(
      _orderId?: PromiseOrValue<BigNumberish> | null
    ): ReleasedFundsEventFilter;
  };

  estimateGas: {
    createEscrow(
      _seller: PromiseOrValue<string>,
      _buyer: PromiseOrValue<string>,
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBuyerOrders(overrides?: CallOverrides): Promise<BigNumber>;

    getMarketplaceAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getOrderById(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getSellerOrders(overrides?: CallOverrides): Promise<BigNumber>;

    refund(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    release(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startDispute(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createEscrow(
      _seller: PromiseOrValue<string>,
      _buyer: PromiseOrValue<string>,
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBuyerOrders(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMarketplaceAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderById(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSellerOrders(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refund(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    release(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startDispute(
      _orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
