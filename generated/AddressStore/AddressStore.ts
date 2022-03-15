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

export class AddedResolveAddress extends ethereum.Event {
  get params(): AddedResolveAddress__Params {
    return new AddedResolveAddress__Params(this);
  }
}

export class AddedResolveAddress__Params {
  _event: AddedResolveAddress;

  constructor(event: AddedResolveAddress) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get addressName(): string {
    return this._event.parameters[1].value.toString();
  }

  get addressNameHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get resolveAddress(): Address {
    return this._event.parameters[3].value.toAddress();
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

export class DeactivatedResolveAddressName extends ethereum.Event {
  get params(): DeactivatedResolveAddressName__Params {
    return new DeactivatedResolveAddressName__Params(this);
  }
}

export class DeactivatedResolveAddressName__Params {
  _event: DeactivatedResolveAddressName;

  constructor(event: DeactivatedResolveAddressName) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get addressName(): string {
    return this._event.parameters[1].value.toString();
  }

  get addressNameHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get resolveAddress(): Address {
    return this._event.parameters[3].value.toAddress();
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

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
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

export class UpdatedResolveAddress extends ethereum.Event {
  get params(): UpdatedResolveAddress__Params {
    return new UpdatedResolveAddress__Params(this);
  }
}

export class UpdatedResolveAddress__Params {
  _event: UpdatedResolveAddress;

  constructor(event: UpdatedResolveAddress) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get addressName(): string {
    return this._event.parameters[1].value.toString();
  }

  get addressNameHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get oldResolveAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get newResolveAddress(): Address {
    return this._event.parameters[4].value.toAddress();
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

export class AddressStore__versionResult {
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

export class AddressStore__versionCoreUtilResult {
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

export class AddressStore extends ethereum.SmartContract {
  static bind(address: Address): AddressStore {
    return new AddressStore("AddressStore", address);
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

  CORE_OPERATOR_ROLE(): Bytes {
    let result = super.call(
      "CORE_OPERATOR_ROLE",
      "CORE_OPERATOR_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_CORE_OPERATOR_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CORE_OPERATOR_ROLE",
      "CORE_OPERATOR_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  CORE_PAUSER_ROLE(): Bytes {
    let result = super.call(
      "CORE_PAUSER_ROLE",
      "CORE_PAUSER_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_CORE_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CORE_PAUSER_ROLE",
      "CORE_PAUSER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  CORE_UPGRADER_ROLE(): Bytes {
    let result = super.call(
      "CORE_UPGRADER_ROLE",
      "CORE_UPGRADER_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_CORE_UPGRADER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CORE_UPGRADER_ROLE",
      "CORE_UPGRADER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getAddress(addressNameHash: Bytes): Address {
    let result = super.call("getAddress", "getAddress(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(addressNameHash)
    ]);

    return result[0].toAddress();
  }

  try_getAddress(addressNameHash: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("getAddress", "getAddress(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(addressNameHash)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAddressName(addressNameHash: Bytes): string {
    let result = super.call(
      "getAddressName",
      "getAddressName(bytes32):(string)",
      [ethereum.Value.fromFixedBytes(addressNameHash)]
    );

    return result[0].toString();
  }

  try_getAddressName(addressNameHash: Bytes): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getAddressName",
      "getAddressName(bytes32):(string)",
      [ethereum.Value.fromFixedBytes(addressNameHash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getAddressNameHashes(): Array<Bytes> {
    let result = super.call(
      "getAddressNameHashes",
      "getAddressNameHashes():(bytes32[])",
      []
    );

    return result[0].toBytesArray();
  }

  try_getAddressNameHashes(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getAddressNameHashes",
      "getAddressNameHashes():(bytes32[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getAddressNames(): Array<string> {
    let result = super.call(
      "getAddressNames",
      "getAddressNames():(string[])",
      []
    );

    return result[0].toStringArray();
  }

  try_getAddressNames(): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "getAddressNames",
      "getAddressNames():(string[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAddressActive(addressNameHash: Bytes): boolean {
    let result = super.call(
      "isAddressActive",
      "isAddressActive(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(addressNameHash)]
    );

    return result[0].toBoolean();
  }

  try_isAddressActive(addressNameHash: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAddressActive",
      "isAddressActive(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(addressNameHash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAddressValid(addressNameHash: Bytes): boolean {
    let result = super.call(
      "isAddressValid",
      "isAddressValid(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(addressNameHash)]
    );

    return result[0].toBoolean();
  }

  try_isAddressValid(addressNameHash: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAddressValid",
      "isAddressValid(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(addressNameHash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  version(): AddressStore__versionResult {
    let result = super.call(
      "version",
      "version():(uint256,uint256,uint256)",
      []
    );

    return new AddressStore__versionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_version(): ethereum.CallResult<AddressStore__versionResult> {
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
      new AddressStore__versionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  versionCoreUtil(): AddressStore__versionCoreUtilResult {
    let result = super.call(
      "versionCoreUtil",
      "versionCoreUtil():(uint256,uint256,uint256)",
      []
    );

    return new AddressStore__versionCoreUtilResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_versionCoreUtil(): ethereum.CallResult<
    AddressStore__versionCoreUtilResult
  > {
    let result = super.tryCall(
      "versionCoreUtil",
      "versionCoreUtil():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AddressStore__versionCoreUtilResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }
}

export class AddAddressCall extends ethereum.Call {
  get inputs(): AddAddressCall__Inputs {
    return new AddAddressCall__Inputs(this);
  }

  get outputs(): AddAddressCall__Outputs {
    return new AddAddressCall__Outputs(this);
  }
}

export class AddAddressCall__Inputs {
  _call: AddAddressCall;

  constructor(call: AddAddressCall) {
    this._call = call;
  }

  get addressName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get resolveAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddAddressCall__Outputs {
  _call: AddAddressCall;

  constructor(call: AddAddressCall) {
    this._call = call;
  }
}

export class DeactivateResolverCall extends ethereum.Call {
  get inputs(): DeactivateResolverCall__Inputs {
    return new DeactivateResolverCall__Inputs(this);
  }

  get outputs(): DeactivateResolverCall__Outputs {
    return new DeactivateResolverCall__Outputs(this);
  }
}

export class DeactivateResolverCall__Inputs {
  _call: DeactivateResolverCall;

  constructor(call: DeactivateResolverCall) {
    this._call = call;
  }

  get addressName(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class DeactivateResolverCall__Outputs {
  _call: DeactivateResolverCall;

  constructor(call: DeactivateResolverCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
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

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
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

export class UpdateAddressCall extends ethereum.Call {
  get inputs(): UpdateAddressCall__Inputs {
    return new UpdateAddressCall__Inputs(this);
  }

  get outputs(): UpdateAddressCall__Outputs {
    return new UpdateAddressCall__Outputs(this);
  }
}

export class UpdateAddressCall__Inputs {
  _call: UpdateAddressCall;

  constructor(call: UpdateAddressCall) {
    this._call = call;
  }

  get addressName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get newResolveAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateAddressCall__Outputs {
  _call: UpdateAddressCall;

  constructor(call: UpdateAddressCall) {
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
