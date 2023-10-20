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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
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
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quantity",
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
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
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
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
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
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
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

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620030dc380380620030dc833981810160405281019062000037919062000174565b62000053671d41a94ba5554dcb60c01b6200010760201b60201c565b6200006f676024235befca135f60c01b6200010760201b60201c565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000cb67a13a725db37137b360c01b6200010760201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050620001bb565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200013c826200010f565b9050919050565b6200014e816200012f565b81146200015a57600080fd5b50565b6000815190506200016e8162000143565b92915050565b600080604083850312156200018e576200018d6200010a565b5b60006200019e858286016200015d565b9250506020620001b1858286016200015d565b9150509250929050565b608051612efe620001de6000396000818161173601526122770152612efe6000f3fe6080604052600436106100865760003560e01c8063700db75211610059578063700db7521461014a578063893d20e814610175578063bb8fe785146101a0578063c0cfa7e5146101cb578063c819998b146101f457610086565b8063278ecde11461008b57806337bdc99b146100b45780633bf3110f146100dd57806342b50a7a1461010d575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad91906129fe565b61021f565b005b3480156100c057600080fd5b506100db60048036038101906100d691906129fe565b610bec565b005b6100f760048036038101906100f29190612a89565b6116e2565b6040516101049190612b13565b60405180910390f35b34801561011957600080fd5b50610134600480360381019061012f91906129fe565b611d30565b6040516101419190612c65565b60405180910390f35b34801561015657600080fd5b5061015f611fb3565b60405161016c9190612dd3565b60405180910390f35b34801561018157600080fd5b5061018a6121d3565b6040516101979190612e04565b60405180910390f35b3480156101ac57600080fd5b506101b5612237565b6040516101c29190612e04565b60405180910390f35b3480156101d757600080fd5b506101f260048036038101906101ed91906129fe565b61229b565b005b34801561020057600080fd5b5061020961271d565b6040516102169190612dd3565b60405180910390f35b610233678adf54609f03c12d60c01b61293d565b8061024867a986cefeec85818760c01b61293d565b61025c679468e128eae60b1a60c01b61293d565b6102706796010dfaecf65cf660c01b61293d565b600060036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16600381111561038a57610389612b4c565b5b600381111561039c5761039b612b4c565b5b815260200160078201548152505090506103c0677a4fa443f0dd646b60c01b61293d565b6103d46707ba95f796c8a10260c01b61293d565b600060038111156103e8576103e7612b4c565b5b8160c0015160038111156103ff576103fe612b4c565b5b14158015610435575060038081111561041b5761041a612b4c565b5b8160c00151600381111561043257610431612b4c565b5b14155b156104945761044e67088091dfa12640c660c01b61293d565b610462677d44f4b501c4318360c01b61293d565b6040517f8a22693e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104a86721c50106825c897d60c01b61293d565b6104bc67a7c7c5dfad30ec6560c01b61293d565b6104d067dfda96af9380697a60c01b61293d565b6104e4672eacbbaf4bd1038160c01b61293d565b826104f967527eb98e367f366c60c01b61293d565b61050d679810e0b36380003060c01b61293d565b61052167010c170a31d2120c60c01b61293d565b600060036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16600381111561063b5761063a612b4c565b5b600381111561064d5761064c612b4c565b5b815260200160078201548152505090506106716745d3b41a49d7ae0260c01b61293d565b610685677dd3f87b173f7fd660c01b61293d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614801561070857506003808111156106ee576106ed612b4c565b5b8160c00151600381111561070557610704612b4c565b5b14155b156107675761072167539a28d4bbb2f8bb60c01b61293d565b61073567964e40ee2cdeb52360c01b61293d565b6040517f8ab9b32900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077b6785176212632737a660c01b61293d565b61078f674c7003b2a701628760c01b61293d565b3373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161415801561081b575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b1561087a5761083467b8512d8a4a233cd460c01b61293d565b6108486722912976bd78484960c01b61293d565b6040517f76df155600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61088e671738f3f3759d663d60c01b61293d565b6108a2678e687d28d1f0071d60c01b61293d565b806000015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614801561090857506003808111156108ef576108ee612b4c565b5b8160c00151600381111561090657610905612b4c565b5b145b156109675761092167dfa79c7729e9ccc960c01b61293d565b6109356729062cc8dc02374160c01b61293d565b6040517f26b095e100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61097b674bf8d5847ee50bf060c01b61293d565b61098f67a8cf46a670d916b060c01b61293d565b6109a367415590abf35f6c1660c01b61293d565b6109b76720dc0852a289c78660c01b61293d565b6109cb67587e37be3e2a8a9f60c01b61293d565b6109df675f071e8a3096ee0560c01b61293d565b6000600360008781526020019081526020016000209050610a0a67a4f4e0f2571abc7c60c01b61293d565b60028160060160006101000a81548160ff02191690836003811115610a3257610a31612b4c565b5b0217905550610a4b67fef194e3b5a36af260c01b61293d565b610a5f67c7d0a25614147d7a60c01b61293d565b60008160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260030154604051610aad90612e50565b60006040518083038185875af1925050503d8060008114610aea576040519150601f19603f3d011682016040523d82523d6000602084013e610aef565b606091505b50509050610b07676ade4ee43526370060c01b61293d565b610b1b67e5572a0ca148689e60c01b61293d565b80610b7a57610b3467d5fffa5233beb7b360c01b61293d565b610b48676954edc2badc589a60c01b61293d565b6040517f4abcf95000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b8e6762149c2c0697814060c01b61293d565b610ba267f65636fa082b6db760c01b61293d565b610bb667ea9568a7c09d234960c01b61293d565b867f6cbb2f5fc1a460905eb3b50b6c769589d8b1a201f03b7f04b1f3ce09c3aee78b60405160405180910390a250505050505050565b610c00670670fa0c97e324c060c01b61293d565b80610c1567a986cefeec85818760c01b61293d565b610c29679468e128eae60b1a60c01b61293d565b610c3d6796010dfaecf65cf660c01b61293d565b600060036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff166003811115610d5757610d56612b4c565b5b6003811115610d6957610d68612b4c565b5b81526020016007820154815250509050610d8d677a4fa443f0dd646b60c01b61293d565b610da16707ba95f796c8a10260c01b61293d565b60006003811115610db557610db4612b4c565b5b8160c001516003811115610dcc57610dcb612b4c565b5b14158015610e025750600380811115610de857610de7612b4c565b5b8160c001516003811115610dff57610dfe612b4c565b5b14155b15610e6157610e1b67088091dfa12640c660c01b61293d565b610e2f677d44f4b501c4318360c01b61293d565b6040517f8a22693e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e756721c50106825c897d60c01b61293d565b610e8967a7c7c5dfad30ec6560c01b61293d565b610e9d6787c4f702bfa41c4960c01b61293d565b610eb16702a89420d0376b4f60c01b61293d565b82610ec667ba63a8469acf7ec760c01b61293d565b610eda671b786cbfc5bbddb660c01b61293d565b610eee67d2a7682fbe9b96a560c01b61293d565b600060036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16600381111561100857611007612b4c565b5b600381111561101a57611019612b4c565b5b8152602001600782015481525050905061103e671614c4ab1e3c0e7860c01b61293d565b611052675d9eba9467bf36dc60c01b61293d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480156110d557506003808111156110bb576110ba612b4c565b5b8160c0015160038111156110d2576110d1612b4c565b5b14155b15611134576110ee67daa96c08f8cfbaeb60c01b61293d565b61110267d53a0eeba684915c60c01b61293d565b6040517f8ab9b32900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61114867713e500cf31766c860c01b61293d565b61115c67982e8deea799826060c01b61293d565b3373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff160361125c576111a7672910437015357dbb60c01b61293d565b6111bb670577ae683f7dab1060c01b61293d565b6111cf67c517ea917b60667060c01b61293d565b62278d008160800151426111e39190612e94565b1015611243576111fd671a195938f297bfe260c01b61293d565b611211674cf94b57c9058e2260c01b61293d565b6040517f586f49f700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611257675f537d3611769a9f60c01b61293d565b611471565b611270678e213de2e7c0f3e960c01b61293d565b611284673da8eb50c5965f2460c01b61293d565b3373ffffffffffffffffffffffffffffffffffffffff16816020015173ffffffffffffffffffffffffffffffffffffffff1614158015611310575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b1561136f5761132967ea6c141a9ec09eee60c01b61293d565b61133d671b8d04d6aa36dae760c01b61293d565b6040517f492aab8600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611383674f1337c4080ba2bd60c01b61293d565b61139767797479d6d3ab781160c01b61293d565b806020015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480156113fd57506003808111156113e4576113e3612b4c565b5b8160c0015160038111156113fb576113fa612b4c565b5b145b1561145c57611416679967075ce7c0ed2d60c01b61293d565b61142a6710487ba0b33925a960c01b61293d565b6040517f26b095e100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611470671416ec0410b1a7d460c01b61293d565b5b61148567081048211811fab560c01b61293d565b61149967ef0c336e0486155860c01b61293d565b6114ad6788916614ddb5604a60c01b61293d565b6114c16756289fca248217c160c01b61293d565b6114d56774a52728903ebc6860c01b61293d565b6000600360008781526020019081526020016000209050611500677bd10de6a7cabf1e60c01b61293d565b60018160060160006101000a81548160ff0219169083600381111561152857611527612b4c565b5b021790555061154167eca099b30beed68b60c01b61293d565b611555676b42d809763e0cb560c01b61293d565b60008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1682600301546040516115a390612e50565b60006040518083038185875af1925050503d80600081146115e0576040519150601f19603f3d011682016040523d82523d6000602084013e6115e5565b606091505b505090506115fd6772f4c21739eedc9f60c01b61293d565b611611676b52d77bcc5684f160c01b61293d565b806116705761162a67a0cd571f8e1d9e0a60c01b61293d565b61163e6715211b0b91d88cb460c01b61293d565b6040517f4abcf95000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61168467befc3620270ff0f260c01b61293d565b611698673be2368da88b39f960c01b61293d565b6116ac671d10082a2ac305ca60c01b61293d565b867fd7c4eded732389526228283d2661ca619ed8096fffca8c0f0c3a6e2a7f4c449d60405160405180910390a250505050505050565b60006116f867067f3ff20160c53a60c01b61293d565b61170c676d8adabdabb8e40860c01b61293d565b611720674b677f51e981752d60c01b61293d565b61173467cc76fcbb1316d35360c01b61293d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117e15761179b67298044c1cac2b2c360c01b61293d565b6117af67480d1a4a154abaec60c01b61293d565b6040517fab24dd7c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117f567fa91eaed2c59f76e60c01b61293d565b611809678682a9107a6fd2c160c01b61293d565b61181d67f02905bc239efdd760c01b61293d565b6118316783bb511f2f4f471b60c01b61293d565b611845673c515e0c4f04e20860c01b61293d565b61185967458b5498b635041460c01b61293d565b60006040518061010001604052808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff168152602001868152602001348152602001428152602001858152602001600060038111156118cb576118ca612b4c565b5b81526020018481525090506118ea67d053eb58535e341b60c01b61293d565b6118fe678ef53031548ea11260c01b61293d565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690836003811115611a4857611a47612b4c565b5b021790555060e082015181600701555050611a6d67f64da947f2a6055560c01b61293d565b611a81674b43e0ebd8b8ed4960c01b61293d565b600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906008020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690836003811115611bcb57611bca612b4c565b5b021790555060e082015181600701555050611bf067cd72c06404fb756860c01b61293d565b806003600086815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690836003811115611ce557611ce4612b4c565b5b021790555060e08201518160070155905050611d0b670eb3ca56f604eef860c01b61293d565b611d1f673326a407adac532560c01b61293d565b8060a0015191505095945050505050565b611d38612940565b611d4c67178b41e7b125903a60c01b61293d565b611d6067e9aa0b4e1574286860c01b61293d565b611d7467b7b337024c635da460c01b61293d565b600073ffffffffffffffffffffffffffffffffffffffff166003600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611e3857611df267062efda05f81889060c01b61293d565b611e0667628dffc3fab2ddf460c01b61293d565b6040517f56421a5700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e4c67f9165bffd114af6b60c01b61293d565b611e6067782cfc5a013337c960c01b61293d565b611e7467c1839b46b22f3b6360c01b61293d565b60036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff166003811115611f8c57611f8b612b4c565b5b6003811115611f9e57611f9d612b4c565b5b81526020016007820154815250509050919050565b6060611fc9675630e77e0f7a210d60c01b61293d565b611fdd67548eaf65cf62560260c01b61293d565b611ff1671b8b13407c0938ae60c01b61293d565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561219e5783829060005260206000209060080201604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16600381111561216f5761216e612b4c565b5b600381111561218157612180612b4c565b5b815260200160078201548152505081526020019060010190612052565b5050505090506121b86794793333fe2f079d60c01b61293d565b6121cc67772e1bf2ba854aef60c01b61293d565b8091505090565b60006121e9677d7411a39e1149c360c01b61293d565b6121fd67cf0552636919536060c01b61293d565b61221167f4df7bac6551b71f60c01b61293d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600061224d6768c626dcdd1cee0460c01b61293d565b6122616708dbabe6e49b837860c01b61293d565b612275678d2ffa62da82f61360c01b61293d565b7f0000000000000000000000000000000000000000000000000000000000000000905090565b6122af67b6521838e3348bb060c01b61293d565b806122c46758c8fea77f50a14160c01b61293d565b6122d867fcddb68f9c9cc26d60c01b61293d565b6122ec67ef3f468eca27f67e60c01b61293d565b600060036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff16600381111561240657612405612b4c565b5b600381111561241857612417612b4c565b5b8152602001600782015481525050905061243c67f145d9f0b5b9eea060c01b61293d565b612450677fc0f059cbb7702260c01b61293d565b806000015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141580156124c05750806020015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b1561251f576124d967746f2bdd3eb0fd9c60c01b61293d565b6124ed67c88b3f2a7594271d60c01b61293d565b6040517f96b88c5100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6125336747d00b45b5d7c4b060c01b61293d565b6125476783bf8d88684d9e8c60c01b61293d565b61255b67780ada794685c76e60c01b61293d565b61256f6710c326611e268a9160c01b61293d565b61258367265199fb51b21ef360c01b61293d565b61259767803583427c68b03560c01b61293d565b60006003600085815260200190815260200160002090506125c26755a5679af814216860c01b61293d565b6125d667670a39492e2fbec560c01b61293d565b600060038111156125ea576125e9612b4c565b5b8160060160009054906101000a900460ff16600381111561260e5761260d612b4c565b5b1461266d57612627678d4872af48d7af1760c01b61293d565b61263b67f321c11113ce73b260c01b61293d565b6040517ff609f42000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61268167eaf59ce00d33cf9e60c01b61293d565b61269567289df4c4ff94ac8a60c01b61293d565b60038160060160006101000a81548160ff021916908360038111156126bd576126bc612b4c565b5b02179055506126d6674ac76f16116646b260c01b61293d565b6126ea674ea2110c63157fda60c01b61293d565b837f912a1e013de32e96d992fc6c81600eb5480705bfabb226c0b69811abf2b3abac60405160405180910390a250505050565b60606127336705e1e19b581157e460c01b61293d565b612747679707f403254cde5a60c01b61293d565b61275b67ceb693f2332168bd60c01b61293d565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156129085783829060005260206000209060080201604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015481526020016006820160009054906101000a900460ff1660038111156128d9576128d8612b4c565b5b60038111156128eb576128ea612b4c565b5b8152602001600782015481525050815260200190600101906127bc565b5050505090506129226721dfbe3fccf4c45160c01b61293d565b61293667c4f5d0024044adca60c01b61293d565b8091505090565b50565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600060038111156129b6576129b5612b4c565b5b8152602001600081525090565b600080fd5b6000819050919050565b6129db816129c8565b81146129e657600080fd5b50565b6000813590506129f8816129d2565b92915050565b600060208284031215612a1457612a136129c3565b5b6000612a22848285016129e9565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612a5682612a2b565b9050919050565b612a6681612a4b565b8114612a7157600080fd5b50565b600081359050612a8381612a5d565b92915050565b600080600080600060a08688031215612aa557612aa46129c3565b5b6000612ab388828901612a74565b9550506020612ac488828901612a74565b9450506040612ad5888289016129e9565b9350506060612ae6888289016129e9565b9250506080612af7888289016129e9565b9150509295509295909350565b612b0d816129c8565b82525050565b6000602082019050612b286000830184612b04565b92915050565b612b3781612a4b565b82525050565b612b46816129c8565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110612b8c57612b8b612b4c565b5b50565b6000819050612b9d82612b7b565b919050565b6000612bad82612b8f565b9050919050565b612bbd81612ba2565b82525050565b61010082016000820151612bda6000850182612b2e565b506020820151612bed6020850182612b2e565b506040820151612c006040850182612b3d565b506060820151612c136060850182612b3d565b506080820151612c266080850182612b3d565b5060a0820151612c3960a0850182612b3d565b5060c0820151612c4c60c0850182612bb4565b5060e0820151612c5f60e0850182612b3d565b50505050565b600061010082019050612c7b6000830184612bc3565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61010082016000820151612cc46000850182612b2e565b506020820151612cd76020850182612b2e565b506040820151612cea6040850182612b3d565b506060820151612cfd6060850182612b3d565b506080820151612d106080850182612b3d565b5060a0820151612d2360a0850182612b3d565b5060c0820151612d3660c0850182612bb4565b5060e0820151612d4960e0850182612b3d565b50505050565b6000612d5b8383612cad565b6101008301905092915050565b6000602082019050919050565b6000612d8082612c81565b612d8a8185612c8c565b9350612d9583612c9d565b8060005b83811015612dc6578151612dad8882612d4f565b9750612db883612d68565b925050600181019050612d99565b5085935050505092915050565b60006020820190508181036000830152612ded8184612d75565b905092915050565b612dfe81612a4b565b82525050565b6000602082019050612e196000830184612df5565b92915050565b600081905092915050565b50565b6000612e3a600083612e1f565b9150612e4582612e2a565b600082019050919050565b6000612e5b82612e2d565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612e9f826129c8565b9150612eaa836129c8565b9250828203905081811115612ec257612ec1612e65565b5b9291505056fea2646970667358221220f10bdd9182d6bcd0dcbb2fa5a3f9f27df11967f9d26290d74106a33ec941241564736f6c63430008130033";

type EscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Escrow__factory extends ContractFactory {
  constructor(...args: EscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _marketplace: AddressLike,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_marketplace, _owner, overrides || {});
  }
  override deploy(
    _marketplace: AddressLike,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_marketplace, _owner, overrides || {}) as Promise<
      Escrow & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Escrow__factory {
    return super.connect(runner) as Escrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EscrowInterface {
    return new Interface(_abi) as EscrowInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Escrow {
    return new Contract(address, _abi, runner) as unknown as Escrow;
  }
}
