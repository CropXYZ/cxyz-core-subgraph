import {
  Paused,
  Unpaused,
  AddedResolveAddress,
  UpdatedResolveAddress,
  DeactivatedResolveAddressName
} from "../generated/AddressStore/AddressStore";
import { AddressMapping, GameState } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("AddressStore");

  if (gameState == null) {
    gameState = new GameState("AddressStore");
  }
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("AddressStore");

  if (gameState == null) {
    gameState = new GameState("AddressStore");
  }
  gameState.isPaused = false;
  gameState.save();
}

export function handleAddAddress(event: AddedResolveAddress): void {
  const addressMapping = new AddressMapping(
    event.params.addressNameHash.toString()
  );

  addressMapping.tokenAddress = event.params.resolveAddress;
  addressMapping.addressNameHash = event.params.addressNameHash;
  addressMapping.addressName = event.params.addressName;
  addressMapping.isActive = true;

  addressMapping.save();
}

export function handleUpdateAddress(event: UpdatedResolveAddress): void {
  const addressMapping = AddressMapping.load(
    event.params.addressNameHash.toString()
  );
  addressMapping.tokenAddress = event.params.newResolveAddress;
  addressMapping.save();
}

export function handleDeactivateAddress(
  event: DeactivatedResolveAddressName
): void {
  const addressMapping = AddressMapping.load(
    event.params.addressNameHash.toString()
  );
  addressMapping.isActive = false;
  addressMapping.save();
}
