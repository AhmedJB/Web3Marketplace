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

export declare namespace Marketplace {
  export type ProductStruct = {
    owner: PromiseOrValue<string>;
    productId: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    quantity: PromiseOrValue<BigNumberish>;
    uri: PromiseOrValue<string>;
  };

  export type ProductStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    owner: string;
    productId: BigNumber;
    price: BigNumber;
    quantity: BigNumber;
    uri: string;
  };
}

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    "buyProduct(uint256,uint256)": FunctionFragment;
    "createProduct(uint256,string,uint256,uint256)": FunctionFragment;
    "getEscrowAddress()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getOwnerProducts()": FunctionFragment;
    "getProductById(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyProduct"
      | "createProduct"
      | "getEscrowAddress"
      | "getOwner"
      | "getOwnerProducts"
      | "getProductById"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyProduct",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createProduct",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
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
    values: [PromiseOrValue<BigNumberish>]
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

  events: {
    "CreatedOrder(uint256)": EventFragment;
    "CreatedProduct(address,uint256,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatedOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreatedProduct"): EventFragment;
}

export interface CreatedOrderEventObject {
  orderId: BigNumber;
}
export type CreatedOrderEvent = TypedEvent<
  [BigNumber],
  CreatedOrderEventObject
>;

export type CreatedOrderEventFilter = TypedEventFilter<CreatedOrderEvent>;

export interface CreatedProductEventObject {
  owner: string;
  productId: BigNumber;
  price: BigNumber;
  uri: string;
}
export type CreatedProductEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  CreatedProductEventObject
>;

export type CreatedProductEventFilter = TypedEventFilter<CreatedProductEvent>;

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

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
    buyProduct(
      _productId: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createProduct(
      _productId: PromiseOrValue<BigNumberish>,
      uri: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getEscrowAddress(overrides?: CallOverrides): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getOwnerProducts(
      overrides?: CallOverrides
    ): Promise<[Marketplace.ProductStructOutput[]]>;

    getProductById(
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Marketplace.ProductStructOutput]>;
  };

  buyProduct(
    _productId: PromiseOrValue<BigNumberish>,
    _quantity: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createProduct(
    _productId: PromiseOrValue<BigNumberish>,
    uri: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _quantity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getEscrowAddress(overrides?: CallOverrides): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getOwnerProducts(
    overrides?: CallOverrides
  ): Promise<Marketplace.ProductStructOutput[]>;

  getProductById(
    _productId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Marketplace.ProductStructOutput>;

  callStatic: {
    buyProduct(
      _productId: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createProduct(
      _productId: PromiseOrValue<BigNumberish>,
      uri: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getEscrowAddress(overrides?: CallOverrides): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getOwnerProducts(
      overrides?: CallOverrides
    ): Promise<Marketplace.ProductStructOutput[]>;

    getProductById(
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Marketplace.ProductStructOutput>;
  };

  filters: {
    "CreatedOrder(uint256)"(
      orderId?: PromiseOrValue<BigNumberish> | null
    ): CreatedOrderEventFilter;
    CreatedOrder(
      orderId?: PromiseOrValue<BigNumberish> | null
    ): CreatedOrderEventFilter;

    "CreatedProduct(address,uint256,uint256,string)"(
      owner?: PromiseOrValue<string> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      price?: null,
      uri?: null
    ): CreatedProductEventFilter;
    CreatedProduct(
      owner?: PromiseOrValue<string> | null,
      productId?: PromiseOrValue<BigNumberish> | null,
      price?: null,
      uri?: null
    ): CreatedProductEventFilter;
  };

  estimateGas: {
    buyProduct(
      _productId: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createProduct(
      _productId: PromiseOrValue<BigNumberish>,
      uri: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getEscrowAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnerProducts(overrides?: CallOverrides): Promise<BigNumber>;

    getProductById(
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyProduct(
      _productId: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createProduct(
      _productId: PromiseOrValue<BigNumberish>,
      uri: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getEscrowAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwnerProducts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProductById(
      _productId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}