import {
  // Paused,
  // Unpaused,
  AddedResolveAddress,
  UpdatedResolveAddress,
  DeactivatedResolveAddressName
} from "../generated/AddressStore/AddressStore";
import { AddressMapping, GameState } from "../generated/schema";

/*
export function handlePause(event: Paused): void {
  let gameState = GameState.load("AddressStore");

  if (gameState == null) {
    gameState = new GameState("AddressStore");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("AddressStore");

  if (gameState == null) {
    gameState = new GameState("AddressStore");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}
*/

export function handleAddAddress(event: AddedResolveAddress): void {
  const addressMapping = new AddressMapping(
    event.params.addressNameHash.toHexString()
  );

  addressMapping.appKey = event.params.appKey;
  addressMapping.tokenAddress = event.params.resolveAddress;
  addressMapping.addressNameHash = event.params.addressNameHash;
  addressMapping.addressName = event.params.addressName;
  addressMapping.isActive = true;

  addressMapping.save();
}

export function handleUpdateAddress(event: UpdatedResolveAddress): void {
  let addressMapping = AddressMapping.load(
    event.params.addressNameHash.toHexString()
  );

  if (addressMapping == null) {
    addressMapping = new AddressMapping(
      event.params.addressNameHash.toHexString()
    );
  }

  addressMapping.appKey = event.params.appKey;
  addressMapping.tokenAddress = event.params.newResolveAddress;
  addressMapping.save();
}

export function handleDeactivateAddress(
  event: DeactivatedResolveAddressName
): void {
  let addressMapping = AddressMapping.load(
    event.params.addressNameHash.toHexString()
  );

  if (addressMapping == null) {
    addressMapping = new AddressMapping(
      event.params.addressNameHash.toHexString()
    );
  }

  addressMapping.isActive = false;
  addressMapping.save();
}
