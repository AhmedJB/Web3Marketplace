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

export declare namespace Marketplace {
  export type ProductStruct = {
    owner: AddressLike;
    productId: BigNumberish;
    price: BigNumberish;
    quantity: BigNumberish;
    uri: string;
  };

  export type ProductStructOutput = [
    owner: string,
    productId: bigint,
    price: bigint,
    quantity: bigint,
    uri: string
  ] & {
    owner: string;
    productId: bigint;
    price: bigint;
    quantity: bigint;
    uri: string;
  };
}

export interface MarketplaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "buyProduct"
      | "createProduct"
      | "getEscrowAddress"
      | "getOwner"
      | "getOwnerProducts"
      | "getProductById"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "CreatedOrder" | "CreatedProduct"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "buyProduct",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createProduct",
    values: [BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEscrowAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getOwnerProducts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProductById",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "buyProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEscrowAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductById",
    data: BytesLike
  ): Result;
}

export namespace CreatedOrderEvent {
  export type InputTuple = [orderId: BigNumberish];
  export type OutputTuple = [orderId: bigint];
  export interface OutputObject {
    orderId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreatedProductEvent {
  export type InputTuple = [
    owner: AddressLike,
    productId: BigNumberish,
    price: BigNumberish,
    uri: string
  ];
  export type OutputTuple = [
    owner: string,
    productId: bigint,
    price: bigint,
    uri: string
  ];
  export interface OutputObject {
    owner: string;
    productId: bigint;
    price: bigint;
    uri: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Marketplace extends BaseContract {
  connect(runner?: ContractRunner | null): Marketplace;
  waitForDeployment(): Promise<this>;

  interface: MarketplaceInterface;

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

  buyProduct: TypedContractMethod<
    [_productId: BigNumberish, _quantity: BigNumberish],
    [void],
    "payable"
  >;

  createProduct: TypedContractMethod<
    [
      _productId: BigNumberish,
      uri: string,
      _price: BigNumberish,
      _quantity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEscrowAddress: TypedContractMethod<[], [string], "view">;

  getOwner: TypedContractMethod<[], [string], "view">;

  getOwnerProducts: TypedContractMethod<
    [],
    [Marketplace.ProductStructOutput[]],
    "view"
  >;

  getProductById: TypedContractMethod<
    [_productId: BigNumberish],
    [Marketplace.ProductStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "buyProduct"
  ): TypedContractMethod<
    [_productId: BigNumberish, _quantity: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createProduct"
  ): TypedContractMethod<
    [
      _productId: BigNumberish,
      uri: string,
      _price: BigNumberish,
      _quantity: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getEscrowAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getOwnerProducts"
  ): TypedContractMethod<[], [Marketplace.ProductStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getProductById"
  ): TypedContractMethod<
    [_productId: BigNumberish],
    [Marketplace.ProductStructOutput],
    "view"
  >;

  getEvent(
    key: "CreatedOrder"
  ): TypedContractEvent<
    CreatedOrderEvent.InputTuple,
    CreatedOrderEvent.OutputTuple,
    CreatedOrderEvent.OutputObject
  >;
  getEvent(
    key: "CreatedProduct"
  ): TypedContractEvent<
    CreatedProductEvent.InputTuple,
    CreatedProductEvent.OutputTuple,
    CreatedProductEvent.OutputObject
  >;

  filters: {
    "CreatedOrder(uint256)": TypedContractEvent<
      CreatedOrderEvent.InputTuple,
      CreatedOrderEvent.OutputTuple,
      CreatedOrderEvent.OutputObject
    >;
    CreatedOrder: TypedContractEvent<
      CreatedOrderEvent.InputTuple,
      CreatedOrderEvent.OutputTuple,
      CreatedOrderEvent.OutputObject
    >;

    "CreatedProduct(address,uint256,uint256,string)": TypedContractEvent<
      CreatedProductEvent.InputTuple,
      CreatedProductEvent.OutputTuple,
      CreatedProductEvent.OutputObject
    >;
    CreatedProduct: TypedContractEvent<
      CreatedProductEvent.InputTuple,
      CreatedProductEvent.OutputTuple,
      CreatedProductEvent.OutputObject
    >;
  };
}