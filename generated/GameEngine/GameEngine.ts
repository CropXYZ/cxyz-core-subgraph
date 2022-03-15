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

export class PausedGame extends ethereum.Event {
  get params(): PausedGame__Params {
    return new PausedGame__Params(this);
  }
}

export class PausedGame__Params {
  _event: PausedGame;

  constructor(event: PausedGame) {
    this._event = event;
  }

  get pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetOfTokenOutGoldInSwapped extends ethereum.Event {
  get params(): SetOfTokenOutGoldInSwapped__Params {
    return new SetOfTokenOutGoldInSwapped__Params(this);
  }
}

export class SetOfTokenOutGoldInSwapped__Params {
  _event: SetOfTokenOutGoldInSwapped;

  constructor(event: SetOfTokenOutGoldInSwapped) {
    this._event = event;
  }

  get swapper(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pool(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get swappingTokenAddresses(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get inputtedTokenOuts(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get inputtedGoldMaxes(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get calculatedTokenOuts(): Array<BigInt> {
    return this._event.parameters[5].value.toBigIntArray();
  }

  get calculatedGoldIns(): Array<BigInt> {
    return this._event.parameters[6].value.toBigIntArray();
  }

  get calculatedTotalGoldIn(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get totalFeesPaid(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class TokenInGoldOutSwapped extends ethereum.Event {
  get params(): TokenInGoldOutSwapped__Params {
    return new TokenInGoldOutSwapped__Params(this);
  }
}

export class TokenInGoldOutSwapped__Params {
  _event: TokenInGoldOutSwapped;

  constructor(event: TokenInGoldOutSwapped) {
    this._event = event;
  }

  get swapper(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get swappingTokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get inputtedTokenIn(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get inputtedGoldMin(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get calculatedTokenIn(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get calculatedGoldOut(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get feeValuePaid(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class TokenOutGoldInSwapped extends ethereum.Event {
  get params(): TokenOutGoldInSwapped__Params {
    return new TokenOutGoldInSwapped__Params(this);
  }
}

export class TokenOutGoldInSwapped__Params {
  _event: TokenOutGoldInSwapped;

  constructor(event: TokenOutGoldInSwapped) {
    this._event = event;
  }

  get swapper(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get swappingTokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get inputtedTokenOut(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get inputtedGoldMax(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get calculatedTokenOut(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get calculatedGoldIn(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get feeValuePaid(): i32 {
    return this._event.parameters[6].value.toI32();
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

export class UnpausedGame extends ethereum.Event {
  get params(): UnpausedGame__Params {
    return new UnpausedGame__Params(this);
  }
}

export class UnpausedGame__Params {
  _event: UnpausedGame;

  constructor(event: UnpausedGame) {
    this._event = event;
  }

  get pauser(): Address {
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

export class GameEngine__versionResult {
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

export class GameEngine__versionGameUtilResult {
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

export class GameEngine__versionPoolOperationResult {
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

export class GameEngine__versionSystemPointersResult {
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

export class GameEngine__versionTokenOperationResult {
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

export class GameEngine extends ethereum.SmartContract {
  static bind(address: Address): GameEngine {
    return new GameEngine("GameEngine", address);
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

  version(): GameEngine__versionResult {
    let result = super.call(
      "version",
      "version():(uint256,uint256,uint256)",
      []
    );

    return new GameEngine__versionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_version(): ethereum.CallResult<GameEngine__versionResult> {
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
      new GameEngine__versionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  versionGameUtil(): GameEngine__versionGameUtilResult {
    let result = super.call(
      "versionGameUtil",
      "versionGameUtil():(uint256,uint256,uint256)",
      []
    );

    return new GameEngine__versionGameUtilResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_versionGameUtil(): ethereum.CallResult<
    GameEngine__versionGameUtilResult
  > {
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
      new GameEngine__versionGameUtilResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  versionPoolOperation(): GameEngine__versionPoolOperationResult {
    let result = super.call(
      "versionPoolOperation",
      "versionPoolOperation():(uint256,uint256,uint256)",
      []
    );

    return new GameEngine__versionPoolOperationResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_versionPoolOperation(): ethereum.CallResult<
    GameEngine__versionPoolOperationResult
  > {
    let result = super.tryCall(
      "versionPoolOperation",
      "versionPoolOperation():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GameEngine__versionPoolOperationResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  versionSystemPointers(): GameEngine__versionSystemPointersResult {
    let result = super.call(
      "versionSystemPointers",
      "versionSystemPointers():(uint256,uint256,uint256)",
      []
    );

    return new GameEngine__versionSystemPointersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_versionSystemPointers(): ethereum.CallResult<
    GameEngine__versionSystemPointersResult
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
      new GameEngine__versionSystemPointersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  versionTokenOperation(): GameEngine__versionTokenOperationResult {
    let result = super.call(
      "versionTokenOperation",
      "versionTokenOperation():(uint256,uint256,uint256)",
      []
    );

    return new GameEngine__versionTokenOperationResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_versionTokenOperation(): ethereum.CallResult<
    GameEngine__versionTokenOperationResult
  > {
    let result = super.tryCall(
      "versionTokenOperation",
      "versionTokenOperation():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GameEngine__versionTokenOperationResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }
}

export class BuySetOfTokensCall extends ethereum.Call {
  get inputs(): BuySetOfTokensCall__Inputs {
    return new BuySetOfTokensCall__Inputs(this);
  }

  get outputs(): BuySetOfTokensCall__Outputs {
    return new BuySetOfTokensCall__Outputs(this);
  }
}

export class BuySetOfTokensCall__Inputs {
  _call: BuySetOfTokensCall;

  constructor(call: BuySetOfTokensCall) {
    this._call = call;
  }

  get listOfElementIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get listOfTokenAmounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get listOfPriceMaxLimits(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class BuySetOfTokensCall__Outputs {
  _call: BuySetOfTokensCall;

  constructor(call: BuySetOfTokensCall) {
    this._call = call;
  }
}

export class BuyTokenCall extends ethereum.Call {
  get inputs(): BuyTokenCall__Inputs {
    return new BuyTokenCall__Inputs(this);
  }

  get outputs(): BuyTokenCall__Outputs {
    return new BuyTokenCall__Outputs(this);
  }
}

export class BuyTokenCall__Inputs {
  _call: BuyTokenCall;

  constructor(call: BuyTokenCall) {
    this._call = call;
  }

  get swappingElementId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get priceMaxLimit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BuyTokenCall__Outputs {
  _call: BuyTokenCall;

  constructor(call: BuyTokenCall) {
    this._call = call;
  }
}

export class GameTokenBurnCall extends ethereum.Call {
  get inputs(): GameTokenBurnCall__Inputs {
    return new GameTokenBurnCall__Inputs(this);
  }

  get outputs(): GameTokenBurnCall__Outputs {
    return new GameTokenBurnCall__Outputs(this);
  }
}

export class GameTokenBurnCall__Inputs {
  _call: GameTokenBurnCall;

  constructor(call: GameTokenBurnCall) {
    this._call = call;
  }

  get addressToUpdate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenElementId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountToBeBurned(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class GameTokenBurnCall__Outputs {
  _call: GameTokenBurnCall;

  constructor(call: GameTokenBurnCall) {
    this._call = call;
  }
}

export class GameTokenMintCall extends ethereum.Call {
  get inputs(): GameTokenMintCall__Inputs {
    return new GameTokenMintCall__Inputs(this);
  }

  get outputs(): GameTokenMintCall__Outputs {
    return new GameTokenMintCall__Outputs(this);
  }
}

export class GameTokenMintCall__Inputs {
  _call: GameTokenMintCall;

  constructor(call: GameTokenMintCall) {
    this._call = call;
  }

  get addressToUpdate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenElementId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountToBeProduced(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class GameTokenMintCall__Outputs {
  _call: GameTokenMintCall;

  constructor(call: GameTokenMintCall) {
    this._call = call;
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

export class PauseGameCall extends ethereum.Call {
  get inputs(): PauseGameCall__Inputs {
    return new PauseGameCall__Inputs(this);
  }

  get outputs(): PauseGameCall__Outputs {
    return new PauseGameCall__Outputs(this);
  }
}

export class PauseGameCall__Inputs {
  _call: PauseGameCall;

  constructor(call: PauseGameCall) {
    this._call = call;
  }
}

export class PauseGameCall__Outputs {
  _call: PauseGameCall;

  constructor(call: PauseGameCall) {
    this._call = call;
  }
}

export class SellTokenCall extends ethereum.Call {
  get inputs(): SellTokenCall__Inputs {
    return new SellTokenCall__Inputs(this);
  }

  get outputs(): SellTokenCall__Outputs {
    return new SellTokenCall__Outputs(this);
  }
}

export class SellTokenCall__Inputs {
  _call: SellTokenCall;

  constructor(call: SellTokenCall) {
    this._call = call;
  }

  get swappingElementId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get priceMinLimit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SellTokenCall__Outputs {
  _call: SellTokenCall;

  constructor(call: SellTokenCall) {
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

export class UnpauseGameCall extends ethereum.Call {
  get inputs(): UnpauseGameCall__Inputs {
    return new UnpauseGameCall__Inputs(this);
  }

  get outputs(): UnpauseGameCall__Outputs {
    return new UnpauseGameCall__Outputs(this);
  }
}

export class UnpauseGameCall__Inputs {
  _call: UnpauseGameCall;

  constructor(call: UnpauseGameCall) {
    this._call = call;
  }
}

export class UnpauseGameCall__Outputs {
  _call: UnpauseGameCall;

  constructor(call: UnpauseGameCall) {
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
