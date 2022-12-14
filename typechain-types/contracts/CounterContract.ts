/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface CounterContractInterface extends utils.Interface {
  functions: {
    "counter()": FunctionFragment;
    "increment()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "counter" | "increment"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(functionFragment: "increment", values?: undefined): string;

  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;

  events: {};
}

export interface CounterContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CounterContractInterface;

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
    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    increment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  increment(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    counter(overrides?: CallOverrides): Promise<BigNumber>;

    increment(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    counter(overrides?: CallOverrides): Promise<BigNumber>;

    increment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
