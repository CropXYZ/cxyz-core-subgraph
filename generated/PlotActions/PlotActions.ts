// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
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

export class ClearedDiedHarvest extends ethereum.Event {
  get params(): ClearedDiedHarvest__Params {
    return new ClearedDiedHarvest__Params(this);
  }
}

export class ClearedDiedHarvest__Params {
  _event: ClearedDiedHarvest;

  constructor(event: ClearedDiedHarvest) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get plotId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get diedStakedElement(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newStakedElement(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get diedAmount(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get plotDeaths(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class ClearedHarvest extends ethereum.Event {
  get params(): ClearedHarvest__Params {
    return new ClearedHarvest__Params(this);
  }
}

export class ClearedHarvest__Params {
  _event: ClearedHarvest;

  constructor(event: ClearedHarvest) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get plotId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get clearedStakedElement(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newStakedElement(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get clearedAmount(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get plotClears(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class HarvestedPlot extends ethereum.Event {
  get params(): HarvestedPlot__Params {
    return new HarvestedPlot__Params(this);
  }
}

export class HarvestedPlot__Params {
  _event: HarvestedPlot;

  constructor(event: HarvestedPlot) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get plotId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get stakedElement(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newStakedElement(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get harvestableAmount(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get actuallyProducedAmount(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get plotHarvests(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
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

export class StakedCrop extends ethereum.Event {
  get params(): StakedCrop__Params {
    return new StakedCrop__Params(this);
  }
}

export class StakedCrop__Params {
  _event: StakedCrop;

  constructor(event: StakedCrop) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get plotId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get stakedElement(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get stakedAmount(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get timeStartStaked(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get timeReadyDelta(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get timeExpiredDelta(): BigInt {
    return this._event.parameters[6].value.toBigInt();
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

export class PlotActions__versionResult {
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

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class PlotActions__versionGameStatusResult {
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

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class PlotActions__versionGameUtilResult {
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

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class PlotActions__versionSystemPointersResult {
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

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class PlotActions extends ethereum.SmartContract {
  static bind(address: Address): PlotActions {
    return new PlotActions("PlotActions", address);
  }

  APP_KEY_SKYONEER(): Bytes {
    let result = super.call(
      "APP_KEY_SKYONEER",
      "APP_KEY_SKYONEER():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_APP_KEY_SKYONEER(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "APP_KEY_SKYONEER",
      "APP_KEY_SKYONEER():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  APP_KEY_SYSTEM(): Bytes {
    let result = super.call("APP_KEY_SYSTEM", "APP_KEY_SYSTEM():(bytes32)", []);

    return result[0].toBytes();
  }

  try_APP_KEY_SYSTEM(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "APP_KEY_SYSTEM",
      "APP_KEY_SYSTEM():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_ENGINE_ADDRESS(): Bytes {
    let result = super.call(
      "AS_ENGINE_ADDRESS",
      "AS_ENGINE_ADDRESS():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_AS_ENGINE_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_ENGINE_ADDRESS",
      "AS_ENGINE_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_GOLD_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_GOLD_ADDRESS",
      "AS_GOLD_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_PLOT_ACTIONS_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_PLOT_ACTIONS_ADDRESS",
      "AS_PLOT_ACTIONS_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_PLOT_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_PLOT_ADDRESS",
      "AS_PLOT_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_PLOT_METADATA_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_PLOT_METADATA_ADDRESS",
      "AS_PLOT_METADATA_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_PLOT_TYPE_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_PLOT_TYPE_ADDRESS",
      "AS_PLOT_TYPE_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_POOL_CORE_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_POOL_CORE_ADDRESS",
      "AS_POOL_CORE_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_POOL_DETAILS_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_POOL_DETAILS_ADDRESS",
      "AS_POOL_DETAILS_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_ROLE_REGISTRY_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_ROLE_REGISTRY_ADDRESS",
      "AS_ROLE_REGISTRY_ADDRESS():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_STARTER_PACK_ACTIVATION_DEST_ADDRESS(): Bytes {
    let result = super.call(
      "AS_STARTER_PACK_ACTIVATION_DEST_ADDRESS",
      "AS_STARTER_PACK_ACTIVATION_DEST_ADDRESS():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_AS_STARTER_PACK_ACTIVATION_DEST_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_STARTER_PACK_ACTIVATION_DEST_ADDRESS",
      "AS_STARTER_PACK_ACTIVATION_DEST_ADDRESS():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_STARTER_PACK_ACTIVATION_SRC_ADDRESS(): Bytes {
    let result = super.call(
      "AS_STARTER_PACK_ACTIVATION_SRC_ADDRESS",
      "AS_STARTER_PACK_ACTIVATION_SRC_ADDRESS():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_AS_STARTER_PACK_ACTIVATION_SRC_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_STARTER_PACK_ACTIVATION_SRC_ADDRESS",
      "AS_STARTER_PACK_ACTIVATION_SRC_ADDRESS():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_STARTER_PACK_ADDRESS(): Bytes {
    let result = super.call(
      "AS_STARTER_PACK_ADDRESS",
      "AS_STARTER_PACK_ADDRESS():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_AS_STARTER_PACK_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_STARTER_PACK_ADDRESS",
      "AS_STARTER_PACK_ADDRESS():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  AS_SYSTEM_STATUS_ADDRESS(): Bytes {
    let result = super.call(
      "AS_SYSTEM_STATUS_ADDRESS",
      "AS_SYSTEM_STATUS_ADDRESS():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_AS_SYSTEM_STATUS_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_SYSTEM_STATUS_ADDRESS",
      "AS_SYSTEM_STATUS_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_TEAM_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_TEAM_ADDRESS",
      "AS_TEAM_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_TIME_BREAKDOWN_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_TIME_BREAKDOWN_ADDRESS",
      "AS_TIME_BREAKDOWN_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_TREASURY_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_TREASURY_ADDRESS",
      "AS_TREASURY_ADDRESS():(bytes32)",
      [],
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
      [],
    );

    return result[0].toBytes();
  }

  try_AS_YIELD_TABLE_ADDRESS(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "AS_YIELD_TABLE_ADDRESS",
      "AS_YIELD_TABLE_ADDRESS():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_DAPP_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "RR_DAPP_ADMIN_ROLE",
      "RR_DAPP_ADMIN_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RR_DAPP_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_DAPP_ADMIN_ROLE",
      "RR_DAPP_ADMIN_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_DAPP_PAUSER_ROLE(): Bytes {
    let result = super.call(
      "RR_DAPP_PAUSER_ROLE",
      "RR_DAPP_PAUSER_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RR_DAPP_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_DAPP_PAUSER_ROLE",
      "RR_DAPP_PAUSER_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_DAPP_UPGRADER_ROLE(): Bytes {
    let result = super.call(
      "RR_DAPP_UPGRADER_ROLE",
      "RR_DAPP_UPGRADER_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RR_DAPP_UPGRADER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_DAPP_UPGRADER_ROLE",
      "RR_DAPP_UPGRADER_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_GAME_MINTER_ROLE(): Bytes {
    let result = super.call(
      "RR_GAME_MINTER_ROLE",
      "RR_GAME_MINTER_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RR_GAME_MINTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_GAME_MINTER_ROLE",
      "RR_GAME_MINTER_ROLE():(bytes32)",
      [],
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

  UPGRADE_INTERFACE_VERSION(): string {
    let result = super.call(
      "UPGRADE_INTERFACE_VERSION",
      "UPGRADE_INTERFACE_VERSION():(string)",
      [],
    );

    return result[0].toString();
  }

  try_UPGRADE_INTERFACE_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "UPGRADE_INTERFACE_VERSION",
      "UPGRADE_INTERFACE_VERSION():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  amountNeededToBeStaked(plotId: BigInt): i32 {
    let result = super.call(
      "amountNeededToBeStaked",
      "amountNeededToBeStaked(uint256):(uint16)",
      [ethereum.Value.fromUnsignedBigInt(plotId)],
    );

    return result[0].toI32();
  }

  try_amountNeededToBeStaked(plotId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "amountNeededToBeStaked",
      "amountNeededToBeStaked(uint256):(uint16)",
      [ethereum.Value.fromUnsignedBigInt(plotId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
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

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

  systemStatus(): Address {
    let result = super.call("systemStatus", "systemStatus():(address)", []);

    return result[0].toAddress();
  }

  try_systemStatus(): ethereum.CallResult<Address> {
    let result = super.tryCall("systemStatus", "systemStatus():(address)", []);
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
      [],
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
      [],
    );

    return result[0].toAddress();
  }

  try_treasuryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treasuryAddress",
      "treasuryAddress():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  version(): PlotActions__versionResult {
    let result = super.call(
      "version",
      "version():(uint256,uint256,uint256)",
      [],
    );

    return new PlotActions__versionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_version(): ethereum.CallResult<PlotActions__versionResult> {
    let result = super.tryCall(
      "version",
      "version():(uint256,uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PlotActions__versionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  versionGameStatus(): PlotActions__versionGameStatusResult {
    let result = super.call(
      "versionGameStatus",
      "versionGameStatus():(uint256,uint256,uint256)",
      [],
    );

    return new PlotActions__versionGameStatusResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_versionGameStatus(): ethereum.CallResult<PlotActions__versionGameStatusResult> {
    let result = super.tryCall(
      "versionGameStatus",
      "versionGameStatus():(uint256,uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PlotActions__versionGameStatusResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  versionGameUtil(): PlotActions__versionGameUtilResult {
    let result = super.call(
      "versionGameUtil",
      "versionGameUtil():(uint256,uint256,uint256)",
      [],
    );

    return new PlotActions__versionGameUtilResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_versionGameUtil(): ethereum.CallResult<PlotActions__versionGameUtilResult> {
    let result = super.tryCall(
      "versionGameUtil",
      "versionGameUtil():(uint256,uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PlotActions__versionGameUtilResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  versionSystemPointers(): PlotActions__versionSystemPointersResult {
    let result = super.call(
      "versionSystemPointers",
      "versionSystemPointers():(uint256,uint256,uint256)",
      [],
    );

    return new PlotActions__versionSystemPointersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_versionSystemPointers(): ethereum.CallResult<PlotActions__versionSystemPointersResult> {
    let result = super.tryCall(
      "versionSystemPointers",
      "versionSystemPointers():(uint256,uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PlotActions__versionSystemPointersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
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

export class ActionClearAndStakeCall extends ethereum.Call {
  get inputs(): ActionClearAndStakeCall__Inputs {
    return new ActionClearAndStakeCall__Inputs(this);
  }

  get outputs(): ActionClearAndStakeCall__Outputs {
    return new ActionClearAndStakeCall__Outputs(this);
  }
}

export class ActionClearAndStakeCall__Inputs {
  _call: ActionClearAndStakeCall;

  constructor(call: ActionClearAndStakeCall) {
    this._call = call;
  }

  get plotId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newStakedElement(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ActionClearAndStakeCall__Outputs {
  _call: ActionClearAndStakeCall;

  constructor(call: ActionClearAndStakeCall) {
    this._call = call;
  }
}

export class ActionClearDeadAndStakeCall extends ethereum.Call {
  get inputs(): ActionClearDeadAndStakeCall__Inputs {
    return new ActionClearDeadAndStakeCall__Inputs(this);
  }

  get outputs(): ActionClearDeadAndStakeCall__Outputs {
    return new ActionClearDeadAndStakeCall__Outputs(this);
  }
}

export class ActionClearDeadAndStakeCall__Inputs {
  _call: ActionClearDeadAndStakeCall;

  constructor(call: ActionClearDeadAndStakeCall) {
    this._call = call;
  }

  get plotId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newStakedElement(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ActionClearDeadAndStakeCall__Outputs {
  _call: ActionClearDeadAndStakeCall;

  constructor(call: ActionClearDeadAndStakeCall) {
    this._call = call;
  }
}

export class ActionHarvestAndRestakeCall extends ethereum.Call {
  get inputs(): ActionHarvestAndRestakeCall__Inputs {
    return new ActionHarvestAndRestakeCall__Inputs(this);
  }

  get outputs(): ActionHarvestAndRestakeCall__Outputs {
    return new ActionHarvestAndRestakeCall__Outputs(this);
  }
}

export class ActionHarvestAndRestakeCall__Inputs {
  _call: ActionHarvestAndRestakeCall;

  constructor(call: ActionHarvestAndRestakeCall) {
    this._call = call;
  }

  get plotId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newStakedElement(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ActionHarvestAndRestakeCall__Outputs {
  _call: ActionHarvestAndRestakeCall;

  constructor(call: ActionHarvestAndRestakeCall) {
    this._call = call;
  }
}

export class ActionStakeCall extends ethereum.Call {
  get inputs(): ActionStakeCall__Inputs {
    return new ActionStakeCall__Inputs(this);
  }

  get outputs(): ActionStakeCall__Outputs {
    return new ActionStakeCall__Outputs(this);
  }
}

export class ActionStakeCall__Inputs {
  _call: ActionStakeCall;

  constructor(call: ActionStakeCall) {
    this._call = call;
  }

  get plotId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get stakedElementId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ActionStakeCall__Outputs {
  _call: ActionStakeCall;

  constructor(call: ActionStakeCall) {
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
