/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../common";
import type { Lock, LockInterface } from "../Lock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051610798380380610798833981810160405281019061002591906101a9565b61003f67700bcbb576d712dc60c01b61016b60201b60201c565b610059678f93842b94251e8560c01b61016b60201b60201c565b61007367857a26327bf8c1e560c01b61016b60201b60201c565b61008d67242fb37ffab1cc6860c01b61016b60201b60201c565b8042106100cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100c690610259565b60405180910390fd5b6100e96780ea85ad9ceafc5e60c01b61016b60201b60201c565b61010367150247b33e1deb1660c01b61016b60201b60201c565b80600081905550610124671a5c1d394523540d60c01b61016b60201b60201c565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610279565b50565b600080fd5b6000819050919050565b61018681610173565b811461019157600080fd5b50565b6000815190506101a38161017d565b92915050565b6000602082840312156101bf576101be61016e565b5b60006101cd84828501610194565b91505092915050565b600082825260208201905092915050565b7f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460008201527f7572650000000000000000000000000000000000000000000000000000000000602082015250565b60006102436023836101d6565b915061024e826101e7565b604082019050919050565b6000602082019050818103600083015261027281610236565b9050919050565b610510806102886000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100645780638da5cb5b1461006e575b600080fd5b61004e61008c565b60405161005b9190610351565b60405180910390f35b61006c610092565b005b61007661030f565b60405161008391906103ad565b60405180910390f35b60005481565b6100a6672183265096b84a4960c01b610335565b6100ba67795851cbceed6cbf60c01b610335565b6100ce675ddb2755106fa1ad60c01b610335565b6100e26730d7eb23b62f921660c01b610335565b600054421015610127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011e90610425565b60405180910390fd5b61013b67dc718e7a83880e2960c01b610335565b61014f67f00992d76f9c229360c01b610335565b610163673e7f611a9ae797a260c01b610335565b61017767d4029d2b2ccd785b60c01b610335565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610207576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101fe90610491565b60405180910390fd5b61021b67cbccf51e7415b60860c01b610335565b61022f67f6b67a01481e1cf360c01b610335565b610243671e573c348c7d6fd360c01b610335565b7fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b9347426040516102749291906104b1565b60405180910390a161029067a9c917b9ab3250fe60c01b610335565b6102a467dfad26b0baa560eb60c01b610335565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561030c573d6000803e3d6000fd5b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b6000819050919050565b61034b81610338565b82525050565b60006020820190506103666000830184610342565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103978261036c565b9050919050565b6103a78161038c565b82525050565b60006020820190506103c2600083018461039e565b92915050565b600082825260208201905092915050565b7f596f752063616e27742077697468647261772079657400000000000000000000600082015250565b600061040f6016836103c8565b915061041a826103d9565b602082019050919050565b6000602082019050818103600083015261043e81610402565b9050919050565b7f596f75206172656e277420746865206f776e6572000000000000000000000000600082015250565b600061047b6014836103c8565b915061048682610445565b602082019050919050565b600060208201905081810360008301526104aa8161046e565b9050919050565b60006040820190506104c66000830185610342565b6104d36020830184610342565b939250505056fea26469706673582212205923d8a465d435a886f640ae0dc12775d95ffdf58ea8abe66f5e7efba8fa4da064736f6c63430008130033";

type LockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lock__factory extends ContractFactory {
  constructor(...args: LockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _unlockTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_unlockTime, overrides || {});
  }
  override deploy(
    _unlockTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_unlockTime, overrides || {}) as Promise<
      Lock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Lock__factory {
    return super.connect(runner) as Lock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockInterface {
    return new Interface(_abi) as LockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lock {
    return new Contract(address, _abi, runner) as unknown as Lock;
  }
}
