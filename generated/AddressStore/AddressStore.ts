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

  get appKey(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get addressName(): string {
    return this._event.parameters[2].value.toString();
  }

  get addressNameHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get resolveAddress(): Address {
    return this._event.parameters[4].value.toAddress();
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

  get appKey(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get addressName(): string {
    return this._event.parameters[2].value.toString();
  }

  get addressNameHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get resolveAddress(): Address {
    return this._event.parameters[4].value.toAddress();
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

  get appKey(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get addressName(): string {
    return this._event.parameters[2].value.toString();
  }

  get addressNameHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get oldResolveAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get newResolveAddress(): Address {
    return this._event.parameters[5].value.toAddress();
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

export class AddressStore__versionSystemUtilResult {
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

export class AddressStore extends ethereum.SmartContract {
  static bind(address: Address): AddressStore {
    return new AddressStore("AddressStore", address);
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

  AS_ROLE_REGISTRY_ADDRESS_STRING(): string {
    let result = super.call(
      "AS_ROLE_REGISTRY_ADDRESS_STRING",
      "AS_ROLE_REGISTRY_ADDRESS_STRING():(string)",
      [],
    );

    return result[0].toString();
  }

  try_AS_ROLE_REGISTRY_ADDRESS_STRING(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "AS_ROLE_REGISTRY_ADDRESS_STRING",
      "AS_ROLE_REGISTRY_ADDRESS_STRING():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  RR_DAPP_ADMIN_ROLE_STRING(): string {
    let result = super.call(
      "RR_DAPP_ADMIN_ROLE_STRING",
      "RR_DAPP_ADMIN_ROLE_STRING():(string)",
      [],
    );

    return result[0].toString();
  }

  try_RR_DAPP_ADMIN_ROLE_STRING(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "RR_DAPP_ADMIN_ROLE_STRING",
      "RR_DAPP_ADMIN_ROLE_STRING():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  RR_DAPP_CONNECTED_ROLE(): Bytes {
    let result = super.call(
      "RR_DAPP_CONNECTED_ROLE",
      "RR_DAPP_CONNECTED_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RR_DAPP_CONNECTED_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_DAPP_CONNECTED_ROLE",
      "RR_DAPP_CONNECTED_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_DAPP_CONNECTED_ROLE_STRING(): string {
    let result = super.call(
      "RR_DAPP_CONNECTED_ROLE_STRING",
      "RR_DAPP_CONNECTED_ROLE_STRING():(string)",
      [],
    );

    return result[0].toString();
  }

  try_RR_DAPP_CONNECTED_ROLE_STRING(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "RR_DAPP_CONNECTED_ROLE_STRING",
      "RR_DAPP_CONNECTED_ROLE_STRING():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  RR_DAPP_PAUSER_ROLE_STRING(): string {
    let result = super.call(
      "RR_DAPP_PAUSER_ROLE_STRING",
      "RR_DAPP_PAUSER_ROLE_STRING():(string)",
      [],
    );

    return result[0].toString();
  }

  try_RR_DAPP_PAUSER_ROLE_STRING(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "RR_DAPP_PAUSER_ROLE_STRING",
      "RR_DAPP_PAUSER_ROLE_STRING():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  RR_DAPP_UPGRADER_ROLE_STRING(): string {
    let result = super.call(
      "RR_DAPP_UPGRADER_ROLE_STRING",
      "RR_DAPP_UPGRADER_ROLE_STRING():(string)",
      [],
    );

    return result[0].toString();
  }

  try_RR_DAPP_UPGRADER_ROLE_STRING(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "RR_DAPP_UPGRADER_ROLE_STRING",
      "RR_DAPP_UPGRADER_ROLE_STRING():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  RR_SYSTEM_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "RR_SYSTEM_ADMIN_ROLE",
      "RR_SYSTEM_ADMIN_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RR_SYSTEM_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_SYSTEM_ADMIN_ROLE",
      "RR_SYSTEM_ADMIN_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_SYSTEM_ADMIN_ROLE_STRING(): string {
    let result = super.call(
      "RR_SYSTEM_ADMIN_ROLE_STRING",
      "RR_SYSTEM_ADMIN_ROLE_STRING():(string)",
      [],
    );

    return result[0].toString();
  }

  try_RR_SYSTEM_ADMIN_ROLE_STRING(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "RR_SYSTEM_ADMIN_ROLE_STRING",
      "RR_SYSTEM_ADMIN_ROLE_STRING():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  RR_SYSTEM_PAUSER_ROLE(): Bytes {
    let result = super.call(
      "RR_SYSTEM_PAUSER_ROLE",
      "RR_SYSTEM_PAUSER_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RR_SYSTEM_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_SYSTEM_PAUSER_ROLE",
      "RR_SYSTEM_PAUSER_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_SYSTEM_PAUSER_ROLE_STRING(): string {
    let result = super.call(
      "RR_SYSTEM_PAUSER_ROLE_STRING",
      "RR_SYSTEM_PAUSER_ROLE_STRING():(string)",
      [],
    );

    return result[0].toString();
  }

  try_RR_SYSTEM_PAUSER_ROLE_STRING(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "RR_SYSTEM_PAUSER_ROLE_STRING",
      "RR_SYSTEM_PAUSER_ROLE_STRING():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  RR_SYSTEM_UPGRADER_ROLE(): Bytes {
    let result = super.call(
      "RR_SYSTEM_UPGRADER_ROLE",
      "RR_SYSTEM_UPGRADER_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RR_SYSTEM_UPGRADER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RR_SYSTEM_UPGRADER_ROLE",
      "RR_SYSTEM_UPGRADER_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RR_SYSTEM_UPGRADER_ROLE_STRING(): string {
    let result = super.call(
      "RR_SYSTEM_UPGRADER_ROLE_STRING",
      "RR_SYSTEM_UPGRADER_ROLE_STRING():(string)",
      [],
    );

    return result[0].toString();
  }

  try_RR_SYSTEM_UPGRADER_ROLE_STRING(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "RR_SYSTEM_UPGRADER_ROLE_STRING",
      "RR_SYSTEM_UPGRADER_ROLE_STRING():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  getAppAddressHash(appKey: Bytes, addressNameHash: Bytes): Bytes {
    let result = super.call(
      "getAppAddressHash",
      "getAppAddressHash(bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );

    return result[0].toBytes();
  }

  try_getAppAddressHash(
    appKey: Bytes,
    addressNameHash: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getAppAddressHash",
      "getAppAddressHash(bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getAppKeys(): Array<Bytes> {
    let result = super.call("getAppKeys", "getAppKeys():(bytes32[])", []);

    return result[0].toBytesArray();
  }

  try_getAppKeys(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall("getAppKeys", "getAppKeys():(bytes32[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getResolvedAddress(appKey: Bytes, addressNameHash: Bytes): Address {
    let result = super.call(
      "getResolvedAddress",
      "getResolvedAddress(bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );

    return result[0].toAddress();
  }

  try_getResolvedAddress(
    appKey: Bytes,
    addressNameHash: Bytes,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getResolvedAddress",
      "getResolvedAddress(bytes32,bytes32):(address)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getResolvedAddressName(appKey: Bytes, addressNameHash: Bytes): string {
    let result = super.call(
      "getResolvedAddressName",
      "getResolvedAddressName(bytes32,bytes32):(string)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );

    return result[0].toString();
  }

  try_getResolvedAddressName(
    appKey: Bytes,
    addressNameHash: Bytes,
  ): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getResolvedAddressName",
      "getResolvedAddressName(bytes32,bytes32):(string)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getResolvedAddressNameHashes(appKey: Bytes): Array<Bytes> {
    let result = super.call(
      "getResolvedAddressNameHashes",
      "getResolvedAddressNameHashes(bytes32):(bytes32[])",
      [ethereum.Value.fromFixedBytes(appKey)],
    );

    return result[0].toBytesArray();
  }

  try_getResolvedAddressNameHashes(
    appKey: Bytes,
  ): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getResolvedAddressNameHashes",
      "getResolvedAddressNameHashes(bytes32):(bytes32[])",
      [ethereum.Value.fromFixedBytes(appKey)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getResolvedAddressNames(appKey: Bytes): Array<string> {
    let result = super.call(
      "getResolvedAddressNames",
      "getResolvedAddressNames(bytes32):(string[])",
      [ethereum.Value.fromFixedBytes(appKey)],
    );

    return result[0].toStringArray();
  }

  try_getResolvedAddressNames(
    appKey: Bytes,
  ): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "getResolvedAddressNames",
      "getResolvedAddressNames(bytes32):(string[])",
      [ethereum.Value.fromFixedBytes(appKey)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  isAddressActive(appKey: Bytes, addressNameHash: Bytes): boolean {
    let result = super.call(
      "isAddressActive",
      "isAddressActive(bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );

    return result[0].toBoolean();
  }

  try_isAddressActive(
    appKey: Bytes,
    addressNameHash: Bytes,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAddressActive",
      "isAddressActive(bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAddressValid(appKey: Bytes, addressNameHash: Bytes): boolean {
    let result = super.call(
      "isAddressValid",
      "isAddressValid(bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );

    return result[0].toBoolean();
  }

  try_isAddressValid(
    appKey: Bytes,
    addressNameHash: Bytes,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAddressValid",
      "isAddressValid(bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromFixedBytes(appKey),
        ethereum.Value.fromFixedBytes(addressNameHash),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  version(): AddressStore__versionResult {
    let result = super.call(
      "version",
      "version():(uint256,uint256,uint256)",
      [],
    );

    return new AddressStore__versionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_version(): ethereum.CallResult<AddressStore__versionResult> {
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
      new AddressStore__versionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  versionSystemUtil(): AddressStore__versionSystemUtilResult {
    let result = super.call(
      "versionSystemUtil",
      "versionSystemUtil():(uint256,uint256,uint256)",
      [],
    );

    return new AddressStore__versionSystemUtilResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_versionSystemUtil(): ethereum.CallResult<AddressStore__versionSystemUtilResult> {
    let result = super.tryCall(
      "versionSystemUtil",
      "versionSystemUtil():(uint256,uint256,uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AddressStore__versionSystemUtilResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
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

  get appKey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get addressName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get resolveAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
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

  get appKey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get addressName(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class DeactivateResolverCall__Outputs {
  _call: DeactivateResolverCall;

  constructor(call: DeactivateResolverCall) {
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

  get roleRegistryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
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

  get appKey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get addressName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get newResolveAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class UpdateAddressCall__Outputs {
  _call: UpdateAddressCall;

  constructor(call: UpdateAddressCall) {
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
