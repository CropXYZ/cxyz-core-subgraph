import { BigInt } from "@graphprotocol/graph-ts";

import {
  Paused,
  Unpaused,
  AddedTimeBreakdown,
  UpdatedTimeBreakdownAddress,
  UpdatedTimeBreakdown,
  ActivatedTimeBreakdown,
  DeactivatedTimeBreakdown
} from "../generated/TimeBreakdown/TimeBreakdown";
import { Crop, GameState, GrowthTimeTable } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("TimeBreakdown");

  if (gameState == null) {
    gameState = new GameState("TimeBreakdown");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("TimeBreakdown");

  if (gameState == null) {
    gameState = new GameState("TimeBreakdown");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handleAddTimeBreakdown(event: AddedTimeBreakdown): void {
  // Create time table
  const timeTable = new GrowthTimeTable(
    event.params.timeBreakdownId.toString()
  );
  timeTable.isActive = event.params.isActive;

  timeTable.crop = event.params.stakedElementNameHash.toHexString();
  timeTable.deltaNothingToStart = BigInt.fromI32(event.params.nothingToStart);
  timeTable.deltaStartToEarly = BigInt.fromI32(event.params.startToEarly);
  timeTable.deltaEarlyToMature = BigInt.fromI32(event.params.earlyToMature);
  timeTable.deltaMatureToExpire = BigInt.fromI32(event.params.matureToExpire);

  timeTable.save();

  // Create crop
  let crop = Crop.load(event.params.stakedElementNameHash.toHexString());

  if (crop == null) {
    crop = new Crop(event.params.stakedElementNameHash.toHexString());
    crop.addressMapping = event.params.addressStoreNameHash.toHexString();
    crop.plotType = event.params.tokenPlotTypeId.toString();

    crop.elementName = event.params.stakedElementName;
    crop.elementNameHash = event.params.stakedElementNameHash;
  }
  crop.growthTimeTable = timeTable.id;

  crop.save();
}

export function handleUpdateTimeBreakdown(event: UpdatedTimeBreakdown): void {
  let timeTable = GrowthTimeTable.load(event.params.timeBreakdownId.toString());

  if (timeTable == null) {
    timeTable = new GrowthTimeTable(event.params.timeBreakdownId.toString());
  }

  timeTable.crop = event.params.stakedElementNameHash.toHexString();
  timeTable.deltaNothingToStart = BigInt.fromI32(
    event.params.newNothingToStart
  );
  timeTable.deltaStartToEarly = BigInt.fromI32(event.params.newStartToEarly);
  timeTable.deltaEarlyToMature = BigInt.fromI32(event.params.newEarlyToMature);
  timeTable.deltaMatureToExpire = BigInt.fromI32(
    event.params.newMatureToExpire
  );

  timeTable.save();

  // Create crop
  let crop = Crop.load(event.params.stakedElementNameHash.toHexString());

  if (crop == null) {
    crop = new Crop(event.params.stakedElementNameHash.toHexString());
  }
  crop.growthTimeTable = timeTable.id;

  crop.save();
}

export function handleUpdateTimeBreakdownAddress(
  event: UpdatedTimeBreakdownAddress
): void {
  // Load crop
  let crop = Crop.load(event.params.stakedElementNameHash.toHexString());

  if (crop == null) {
    crop = new Crop(event.params.stakedElementNameHash.toHexString());
  }
  crop.addressMapping = event.params.newAddressStoreNameHash.toHexString();

  crop.save();
}

export function handleActivateTimeBreakdown(
  event: ActivatedTimeBreakdown
): void {
  let timeTable = GrowthTimeTable.load(event.params.timeBreakdownId.toString());

  if (timeTable == null) {
    timeTable = new GrowthTimeTable(event.params.timeBreakdownId.toString());
  }

  timeTable.isActive = true;
  timeTable.save();
}

export function handleDeactivateTimeBreakdown(
  event: DeactivatedTimeBreakdown
): void {
  let timeTable = GrowthTimeTable.load(event.params.timeBreakdownId.toString());

  if (timeTable == null) {
    timeTable = new GrowthTimeTable(event.params.timeBreakdownId.toString());
  }

  timeTable.isActive = false;
  timeTable.save();
}
