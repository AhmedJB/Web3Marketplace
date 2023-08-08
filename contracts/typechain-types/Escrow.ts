/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Escrow {
  export type OrderStruct = {
    seller: AddressLike;
    buyer: AddressLike;
    productId: BigNumberish;
    value: BigNumberish;
    timestamp: BigNumberish;
    orderId: BigNumberish;
    state: BigNumberish;
  };

  export type OrderStructOutput = [
    seller: string,
    buyer: string,
    productId: bigint,
    value: bigint,
    timestamp: bigint,
    orderId: bigint,
    state: bigint
  ] & {
    seller: string;
    buyer: string;
    productId: bigint;
    value: bigint;
    timestamp: bigint;
    orderId: bigint;
    state: bigint;
  };
}

export interface EscrowInterface extends Interface {
  getFunction(
    nameOrSignature:
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

  getEvent(
    nameOrSignatureOrTopic: "DisputedOrder" | "RefundedFunds" | "ReleasedFunds"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createEscrow",
    values: [AddressLike, AddressLike, BigNumberish]
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
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSellerOrders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "refund",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startDispute",
    values: [BigNumberish]
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
}

export namespace DisputedOrderEvent {
  export type InputTuple = [_orderId: BigNumberish];
  export type OutputTuple = [_orderId: bigint];
  export interface OutputObject {
    _orderId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RefundedFundsEvent {
  export type InputTuple = [_orderId: BigNumberish];
  export type OutputTuple = [_orderId: bigint];
  export interface OutputObject {
    _orderId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReleasedFundsEvent {
  export type InputTuple = [_orderId: BigNumberish];
  export type OutputTuple = [_orderId: bigint];
  export interface OutputObject {
    _orderId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Escrow extends BaseContract {
  connect(runner?: ContractRunner | null): Escrow;
  waitForDeployment(): Promise<this>;

  interface: EscrowInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createEscrow: TypedContractMethod<
    [_seller: AddressLike, _buyer: AddressLike, _productId: BigNumberish],
    [bigint],
    "payable"
  >;

  getBuyerOrders: TypedContractMethod<[], [Escrow.OrderStructOutput[]], "view">;

  getMarketplaceAddress: TypedContractMethod<[], [string], "view">;

  getOrderById: TypedContractMethod<
    [_orderId: BigNumberish],
    [Escrow.OrderStructOutput],
    "view"
  >;

  getOwner: TypedContractMethod<[], [string], "view">;

  getSellerOrders: TypedContractMethod<
    [],
    [Escrow.OrderStructOutput[]],
    "view"
  >;

  refund: TypedContractMethod<[_orderId: BigNumberish], [void], "nonpayable">;

  release: TypedContractMethod<[_orderId: BigNumberish], [void], "nonpayable">;

  startDispute: TypedContractMethod<
    [_orderId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createEscrow"
  ): TypedContractMethod<
    [_seller: AddressLike, _buyer: AddressLike, _productId: BigNumberish],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getBuyerOrders"
  ): TypedContractMethod<[], [Escrow.OrderStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getMarketplaceAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getOrderById"
  ): TypedContractMethod<
    [_orderId: BigNumberish],
    [Escrow.OrderStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getSellerOrders"
  ): TypedContractMethod<[], [Escrow.OrderStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "refund"
  ): TypedContractMethod<[_orderId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "release"
  ): TypedContractMethod<[_orderId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startDispute"
  ): TypedContractMethod<[_orderId: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "DisputedOrder"
  ): TypedContractEvent<
    DisputedOrderEvent.InputTuple,
    DisputedOrderEvent.OutputTuple,
    DisputedOrderEvent.OutputObject
  >;
  getEvent(
    key: "RefundedFunds"
  ): TypedContractEvent<
    RefundedFundsEvent.InputTuple,
    RefundedFundsEvent.OutputTuple,
    RefundedFundsEvent.OutputObject
  >;
  getEvent(
    key: "ReleasedFunds"
  ): TypedContractEvent<
    ReleasedFundsEvent.InputTuple,
    ReleasedFundsEvent.OutputTuple,
    ReleasedFundsEvent.OutputObject
  >;

  filters: {
    "DisputedOrder(uint256)": TypedContractEvent<
      DisputedOrderEvent.InputTuple,
      DisputedOrderEvent.OutputTuple,
      DisputedOrderEvent.OutputObject
    >;
    DisputedOrder: TypedContractEvent<
      DisputedOrderEvent.InputTuple,
      DisputedOrderEvent.OutputTuple,
      DisputedOrderEvent.OutputObject
    >;

    "RefundedFunds(uint256)": TypedContractEvent<
      RefundedFundsEvent.InputTuple,
      RefundedFundsEvent.OutputTuple,
      RefundedFundsEvent.OutputObject
    >;
    RefundedFunds: TypedContractEvent<
      RefundedFundsEvent.InputTuple,
      RefundedFundsEvent.OutputTuple,
      RefundedFundsEvent.OutputObject
    >;

    "ReleasedFunds(uint256)": TypedContractEvent<
      ReleasedFundsEvent.InputTuple,
      ReleasedFundsEvent.OutputTuple,
      ReleasedFundsEvent.OutputObject
    >;
    ReleasedFunds: TypedContractEvent<
      ReleasedFundsEvent.InputTuple,
      ReleasedFundsEvent.OutputTuple,
      ReleasedFundsEvent.OutputObject
    >;
  };
}
