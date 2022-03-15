// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddressStoreChanged extends ethereum.Event {
  get params(): AddressStoreChanged__Params {
    return new AddressStoreChanged__Params(this);
  }
}

export class AddressStoreChanged__Params {
  _event: AddressStoreChanged;

  constructor(event: AddressStoreChanged) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldAddressStore(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newAddressStore(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SentToTreasury extends ethereum.Event {
  get params(): SentToTreasury__Params {
    return new SentToTreasury__Params(this);
  }
}

export class SentToTreasury__Params {
  _event: SentToTreasury;

  constructor(event: SentToTreasury) {
    this._event = event;
  }

  get treasuryAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TransferredFromPool extends ethereum.Event {
  get params(): TransferredFromPool__Params {
    return new TransferredFromPool__Params(this);
  }
}

export class TransferredFromPool__Params {
  _event: TransferredFromPool;

  constructor(event: TransferredFromPool) {
    this._event = event;
  }

  get destinationAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get goldAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get originalInputAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get goldDelta(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get tokenDelta(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get updatedGoldBalance(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get updatedTokenBalance(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get isSwapperAdding(): boolean {
    return this._event.parameters[8].value.toBoolean();
  }

  get isInputTokenAmountGold(): boolean {
    return this._event.parameters[9].value.toBoolean();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PoolCore__calculateUpdatedBalancesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class PoolCore__quoteSwapValueWithTokenAddressResultValue0Struct extends ethereum.Tuple {
  get gold(): BigInt {
    return this[0].toBigInt();
  }

  get token(): BigInt {
    return this[1].toBigInt();
  }
}

export class PoolCore__quoteSwapValueWithTokenNameResultValue0Struct extends ethereum.Tuple {
  get gold(): BigInt {
    return this[0].toBigInt();
  }

  get token(): BigInt {
    return this[1].toBigInt();
  }
}

export class PoolCore__versionResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class PoolCore__versionGameStatusResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class PoolCore__versionGameUtilResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class PoolCore__versionSystemPointersResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class PoolCore extends ethereum.SmartContract {
  static bind(address: Address): PoolCore {
    return new PoolCore("PoolCore", address);
  }

  AS_ENGINE_ADDRESS(): Bytes {
    let result = super.call(
      "AS_ENGINE_ADDRESS",
      "AS_ENGINE_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_ENGINE_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_ENGINE_ADDRESS",
      "AS_ENGINE_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_GOLD_ADDRESS(): Bytes {
    let result = super.call(
      "AS_GOLD_ADDRESS",
      "AS_GOLD_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_GOLD_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_GOLD_ADDRESS",
      "AS_GOLD_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_PLOT_ACTIONS_ADDRESS(): Bytes {
    let result = super.call(
      "AS_PLOT_ACTIONS_ADDRESS",
      "AS_PLOT_ACTIONS_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_PLOT_ACTIONS_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_PLOT_ACTIONS_ADDRESS",
      "AS_PLOT_ACTIONS_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_PLOT_ADDRESS(): Bytes {
    let result = super.call(
      "AS_PLOT_ADDRESS",
      "AS_PLOT_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_PLOT_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_PLOT_ADDRESS",
      "AS_PLOT_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_PLOT_METADATA_ADDRESS(): Bytes {
    let result = super.call(
      "AS_PLOT_METADATA_ADDRESS",
      "AS_PLOT_METADATA_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_PLOT_METADATA_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_PLOT_METADATA_ADDRESS",
      "AS_PLOT_METADATA_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_PLOT_TYPE_ADDRESS(): Bytes {
    let result = super.call(
      "AS_PLOT_TYPE_ADDRESS",
      "AS_PLOT_TYPE_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_PLOT_TYPE_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_PLOT_TYPE_ADDRESS",
      "AS_PLOT_TYPE_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_POOL_CORE_ADDRESS(): Bytes {
    let result = super.call(
      "AS_POOL_CORE_ADDRESS",
      "AS_POOL_CORE_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_POOL_CORE_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_POOL_CORE_ADDRESS",
      "AS_POOL_CORE_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_POOL_DETAILS_ADDRESS(): Bytes {
    let result = super.call(
      "AS_POOL_DETAILS_ADDRESS",
      "AS_POOL_DETAILS_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_POOL_DETAILS_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_POOL_DETAILS_ADDRESS",
      "AS_POOL_DETAILS_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_ROLE_REGISTRY_ADDRESS(): Bytes {
    let result = super.call(
      "AS_ROLE_REGISTRY_ADDRESS",
      "AS_ROLE_REGISTRY_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_ROLE_REGISTRY_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_ROLE_REGISTRY_ADDRESS",
      "AS_ROLE_REGISTRY_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_TEAM_ADDRESS(): Bytes {
    let result = super.call(
      "AS_TEAM_ADDRESS",
      "AS_TEAM_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_TEAM_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_TEAM_ADDRESS",
      "AS_TEAM_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_TIME_BREAKDOWN_ADDRESS(): Bytes {
    let result = super.call(
      "AS_TIME_BREAKDOWN_ADDRESS",
      "AS_TIME_BREAKDOWN_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_TIME_BREAKDOWN_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_TIME_BREAKDOWN_ADDRESS",
      "AS_TIME_BREAKDOWN_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_TREASURY_ADDRESS(): Bytes {
    let result = super.call(
      "AS_TREASURY_ADDRESS",
      "AS_TREASURY_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_TREASURY_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_TREASURY_ADDRESS",
      "AS_TREASURY_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_YIELD_TABLE_ADDRESS(): Bytes {
    let result = super.call(
      "AS_YIELD_TABLE_ADDRESS",
      "AS_YIELD_TABLE_ADDRESS():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_AS_YIELD_TABLE_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_YIELD_TABLE_ADDRESS",
      "AS_YIELD_TABLE_ADDRESS():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_ADDRESS_CONTROLLER_ROLE(): Bytes {
    let result = super.call(
      "RR_ADDRESS_CONTROLLER_ROLE",
      "RR_ADDRESS_CONTROLLER_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_RR_ADDRESS_CONTROLLER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_ADDRESS_CONTROLLER_ROLE",
      "RR_ADDRESS_CONTROLLER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_GAME_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "RR_GAME_ADMIN_ROLE",
      "RR_GAME_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_RR_GAME_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_GAME_ADMIN_ROLE",
      "RR_GAME_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_GAME_ROLE(): Bytes {
    let result = super.call("RR_GAME_ROLE", "RR_GAME_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_RR_GAME_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("RR_GAME_ROLE", "RR_GAME_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_OPERATOR_ROLE(): Bytes {
    let result = super.call(
      "RR_OPERATOR_ROLE",
      "RR_OPERATOR_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_RR_OPERATOR_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_OPERATOR_ROLE",
      "RR_OPERATOR_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_PAUSER_ROLE(): Bytes {
    let result = super.call("RR_PAUSER_ROLE", "RR_PAUSER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_RR_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_PAUSER_ROLE",
      "RR_PAUSER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_UPGRADER_ROLE(): Bytes {
    let result = super.call(
      "RR_UPGRADER_ROLE",
      "RR_UPGRADER_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_RR_UPGRADER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_UPGRADER_ROLE",
      "RR_UPGRADER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  addressStore(): Address {
    let result = super.call("addressStore", "addressStore():(address)", []);

    return result[0].toAddress();
  }

  try_addressStore(): ethereum.CallResult<Address> {
    let result = super.tryCall("addressStore", "addressStore():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOfAddress(tokenAddress: Address): BigInt {
    let result = super.call(
      "balanceOfAddress",
      "balanceOfAddress(address):(uint256)",
      [ethereum.Value.fromAddress(tokenAddress)]
    );

    return result[0].toBigInt();
  }

  try_balanceOfAddress(tokenAddress: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfAddress",
      "balanceOfAddress(address):(uint256)",
      [ethereum.Value.fromAddress(tokenAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfTokenNamed(tokenAddressName: string): BigInt {
    let result = super.call(
      "balanceOfTokenNamed",
      "balanceOfTokenNamed(string):(uint256)",
      [ethereum.Value.fromString(tokenAddressName)]
    );

    return result[0].toBigInt();
  }

  try_balanceOfTokenNamed(
    tokenAddressName: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfTokenNamed",
      "balanceOfTokenNamed(string):(uint256)",
      [ethereum.Value.fromString(tokenAddressName)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateUpdatedBalances(
    tokenAddress: Address,
    tokenAmount: BigInt,
    isAdding: boolean,
    isTokenAmountGold: boolean
  ): PoolCore__calculateUpdatedBalancesResult {
    let result = super.call(
      "calculateUpdatedBalances",
      "calculateUpdatedBalances(address,uint256,bool,bool):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromBoolean(isAdding),
        ethereum.Value.fromBoolean(isTokenAmountGold)
      ]
    );

    return new PoolCore__calculateUpdatedBalancesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_calculateUpdatedBalances(
    tokenAddress: Address,
    tokenAmount: BigInt,
    isAdding: boolean,
    isTokenAmountGold: boolean
  ): ethereum.CallResult<PoolCore__calculateUpdatedBalancesResult> {
    let result = super.tryCall(
      "calculateUpdatedBalances",
      "calculateUpdatedBalances(address,uint256,bool,bool):(uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromBoolean(isAdding),
        ethereum.Value.fromBoolean(isTokenAmountGold)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PoolCore__calculateUpdatedBalancesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  gameEngine(): Address {
    let result = super.call("gameEngine", "gameEngine():(address)", []);

    return result[0].toAddress();
  }

  try_gameEngine(): ethereum.CallResult<Address> {
    let result = super.tryCall("gameEngine", "gameEngine():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  goldAddress(): Address {
    let result = super.call("goldAddress", "goldAddress():(address)", []);

    return result[0].toAddress();
  }

  try_goldAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("goldAddress", "goldAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  kValueOfGoldAndTokenAddress(tokenAddress: Address): BigInt {
    let result = super.call(
      "kValueOfGoldAndTokenAddress",
      "kValueOfGoldAndTokenAddress(address):(uint256)",
      [ethereum.Value.fromAddress(tokenAddress)]
    );

    return result[0].toBigInt();
  }

  try_kValueOfGoldAndTokenAddress(
    tokenAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "kValueOfGoldAndTokenAddress",
      "kValueOfGoldAndTokenAddress(address):(uint256)",
      [ethereum.Value.fromAddress(tokenAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  kValueOfGoldAndTokenName(tokenAddressName: string): BigInt {
    let result = super.call(
      "kValueOfGoldAndTokenName",
      "kValueOfGoldAndTokenName(string):(uint256)",
      [ethereum.Value.fromString(tokenAddressName)]
    );

    return result[0].toBigInt();
  }

  try_kValueOfGoldAndTokenName(
    tokenAddressName: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "kValueOfGoldAndTokenName",
      "kValueOfGoldAndTokenName(string):(uint256)",
      [ethereum.Value.fromString(tokenAddressName)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  pausedGame(): boolean {
    let result = super.call("pausedGame", "pausedGame():(bool)", []);

    return result[0].toBoolean();
  }

  try_pausedGame(): ethereum.CallResult<boolean> {
    let result = super.tryCall("pausedGame", "pausedGame():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  plotType(): Address {
    let result = super.call("plotType", "plotType():(address)", []);

    return result[0].toAddress();
  }

  try_plotType(): ethereum.CallResult<Address> {
    let result = super.tryCall("plotType", "plotType():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolAddress(): Address {
    let result = super.call("poolAddress", "poolAddress():(address)", []);

    return result[0].toAddress();
  }

  try_poolAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("poolAddress", "poolAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  quoteSwapValueWithTokenAddress(
    tokenAddress: Address,
    tokenAmount: BigInt,
    isAdding: boolean,
    isTokenAmountGold: boolean
  ): PoolCore__quoteSwapValueWithTokenAddressResultValue0Struct {
    let result = super.call(
      "quoteSwapValueWithTokenAddress",
      "quoteSwapValueWithTokenAddress(address,uint256,bool,bool):((uint256,uint256))",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromBoolean(isAdding),
        ethereum.Value.fromBoolean(isTokenAmountGold)
      ]
    );

    return changetype<
      PoolCore__quoteSwapValueWithTokenAddressResultValue0Struct
    >(result[0].toTuple());
  }

  try_quoteSwapValueWithTokenAddress(
    tokenAddress: Address,
    tokenAmount: BigInt,
    isAdding: boolean,
    isTokenAmountGold: boolean
  ): ethereum.CallResult<
    PoolCore__quoteSwapValueWithTokenAddressResultValue0Struct
  > {
    let result = super.tryCall(
      "quoteSwapValueWithTokenAddress",
      "quoteSwapValueWithTokenAddress(address,uint256,bool,bool):((uint256,uint256))",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromBoolean(isAdding),
        ethereum.Value.fromBoolean(isTokenAmountGold)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<PoolCore__quoteSwapValueWithTokenAddressResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  quoteSwapValueWithTokenName(
    tokenAddressName: string,
    tokenAmount: BigInt,
    isAdding: boolean,
    isTokenAmountGold: boolean
  ): PoolCore__quoteSwapValueWithTokenNameResultValue0Struct {
    let result = super.call(
      "quoteSwapValueWithTokenName",
      "quoteSwapValueWithTokenName(string,uint256,bool,bool):((uint256,uint256))",
      [
        ethereum.Value.fromString(tokenAddressName),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromBoolean(isAdding),
        ethereum.Value.fromBoolean(isTokenAmountGold)
      ]
    );

    return changetype<PoolCore__quoteSwapValueWithTokenNameResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_quoteSwapValueWithTokenName(
    tokenAddressName: string,
    tokenAmount: BigInt,
    isAdding: boolean,
    isTokenAmountGold: boolean
  ): ethereum.CallResult<
    PoolCore__quoteSwapValueWithTokenNameResultValue0Struct
  > {
    let result = super.tryCall(
      "quoteSwapValueWithTokenName",
      "quoteSwapValueWithTokenName(string,uint256,bool,bool):((uint256,uint256))",
      [
        ethereum.Value.fromString(tokenAddressName),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromBoolean(isAdding),
        ethereum.Value.fromBoolean(isTokenAmountGold)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<PoolCore__quoteSwapValueWithTokenNameResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  roleRegistry(): Address {
    let result = super.call("roleRegistry", "roleRegistry():(address)", []);

    return result[0].toAddress();
  }

  try_roleRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall("roleRegistry", "roleRegistry():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timeBreakdown(): Address {
    let result = super.call("timeBreakdown", "timeBreakdown():(address)", []);

    return result[0].toAddress();
  }

  try_timeBreakdown(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "timeBreakdown",
      "timeBreakdown():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treasuryAddress(): Address {
    let result = super.call(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_treasuryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  version(): PoolCore__versionResult {
    let result = super.call(
      "version",
      "version():(uint256,uint256,uint256)",
      []
    );

    return new PoolCore__versionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_version(): ethereum.CallResult<PoolCore__versionResult> {
    let result = super.tryCall(
      "version",
      "version():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PoolCore__versionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  versionGameStatus(): PoolCore__versionGameStatusResult {
    let result = super.call(
      "versionGameStatus",
      "versionGameStatus():(uint256,uint256,uint256)",
      []
    );

    return new PoolCore__versionGameStatusResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_versionGameStatus(): ethereum.CallResult<
    PoolCore__versionGameStatusResult
  > {
    let result = super.tryCall(
      "versionGameStatus",
      "versionGameStatus():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PoolCore__versionGameStatusResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  versionGameUtil(): PoolCore__versionGameUtilResult {
    let result = super.call(
      "versionGameUtil",
      "versionGameUtil():(uint256,uint256,uint256)",
      []
    );

    return new PoolCore__versionGameUtilResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_versionGameUtil(): ethereum.CallResult<PoolCore__versionGameUtilResult> {
    let result = super.tryCall(
      "versionGameUtil",
      "versionGameUtil():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PoolCore__versionGameUtilResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  versionSystemPointers(): PoolCore__versionSystemPointersResult {
    let result = super.call(
      "versionSystemPointers",
      "versionSystemPointers():(uint256,uint256,uint256)",
      []
    );

    return new PoolCore__versionSystemPointersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_versionSystemPointers(): ethereum.CallResult<
    PoolCore__versionSystemPointersResult
  > {
    let result = super.tryCall(
      "versionSystemPointers",
      "versionSystemPointers():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PoolCore__versionSystemPointersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  yieldTable(): Address {
    let result = super.call("yieldTable", "yieldTable():(address)", []);

    return result[0].toAddress();
  }

  try_yieldTable(): ethereum.CallResult<Address> {
    let result = super.tryCall("yieldTable", "yieldTable():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get addressStoreAddress_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class SendToTreasuryCall extends ethereum.Call {
  get inputs(): SendToTreasuryCall__Inputs {
    return new SendToTreasuryCall__Inputs(this);
  }

  get outputs(): SendToTreasuryCall__Outputs {
    return new SendToTreasuryCall__Outputs(this);
  }
}

export class SendToTreasuryCall__Inputs {
  _call: SendToTreasuryCall;

  constructor(call: SendToTreasuryCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SendToTreasuryCall__Outputs {
  _call: SendToTreasuryCall;

  constructor(call: SendToTreasuryCall) {
    this._call = call;
  }
}

export class SwapFromPoolCall extends ethereum.Call {
  get inputs(): SwapFromPoolCall__Inputs {
    return new SwapFromPoolCall__Inputs(this);
  }

  get outputs(): SwapFromPoolCall__Outputs {
    return new SwapFromPoolCall__Outputs(this);
  }
}

export class SwapFromPoolCall__Inputs {
  _call: SwapFromPoolCall;

  constructor(call: SwapFromPoolCall) {
    this._call = call;
  }

  get destinationAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get isAdding(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get isTokenAmountGold(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class SwapFromPoolCall__Outputs {
  _call: SwapFromPoolCall;

  constructor(call: SwapFromPoolCall) {
    this._call = call;
  }
}

export class TransferAddressStoreCall extends ethereum.Call {
  get inputs(): TransferAddressStoreCall__Inputs {
    return new TransferAddressStoreCall__Inputs(this);
  }

  get outputs(): TransferAddressStoreCall__Outputs {
    return new TransferAddressStoreCall__Outputs(this);
  }
}

export class TransferAddressStoreCall__Inputs {
  _call: TransferAddressStoreCall;

  constructor(call: TransferAddressStoreCall) {
    this._call = call;
  }

  get newAddressStore(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferAddressStoreCall__Outputs {
  _call: TransferAddressStoreCall;

  constructor(call: TransferAddressStoreCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}