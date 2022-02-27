import { BigInt } from "@graphprotocol/graph-ts";
import {
  Paused,
  Unpaused,
  SetOfTokenOutGoldInSwapped,
  TokenOutGoldInSwapped,
  TokenInGoldOutSwapped,
  PausedGame,
  UnpausedGame,
  ActivatedPlotType,
  AddedTimeBreakdown,
  UpdatedTimeBreakdownAddress,
  UpdatedTimeBreakdown,
  ActivatedTimeBreakdown,
  DeactivatedTimeBreakdown,
  AddedYieldConfig,
  UpdatedYieldConfig,
  ActivatedYieldConfig,
  DeactivatedYieldConfig
} from "../generated/GameEngine/GameEngine";
import {
  Crop,
  GameState,
  GrowthTimeTable,
  PlotType,
  YieldConfig
} from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("GameEngine");

  if (gameState == null) {
    gameState = new GameState("GameEngine");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("GameEngine");

  if (gameState == null) {
    gameState = new GameState("GameEngine");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handlePauseGame(event: PausedGame): void {
  let gameState = GameState.load("OverallGameState");

  if (gameState == null) {
    gameState = new GameState("OverallGameState");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpauseGame(event: UnpausedGame): void {
  let gameState = GameState.load("OverallGameState");

  if (gameState == null) {
    gameState = new GameState("OverallGameState");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handleComplexPurchase(
  event: SetOfTokenOutGoldInSwapped
): void {}

export function handleSimplePurchase(event: TokenOutGoldInSwapped): void {}

export function handleSimpleSell(event: TokenInGoldOutSwapped): void {}

export function handleActivatePlotType(event: ActivatedPlotType): void {
  const plotType = new PlotType(event.params.plotTypeId.toString());
  plotType.name = event.params.plotType;
  plotType.save();
}

export function handleAddTimeBreakdown(event: AddedTimeBreakdown): void {
  // Create time table
  const timeTable = new GrowthTimeTable(
    event.params.timeBreakdownId.toString()
  );

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

export function handleAddYieldConfig(event: AddedYieldConfig): void {
  const yieldConfig = new YieldConfig(event.params.yieldTableId.toString());

  let plotType = PlotType.load(event.params.plotTypeId.toString());

  if (plotType == null) {
    plotType = new PlotType(event.params.plotTypeId.toString());
  }

  yieldConfig.isActive = event.params.isActive;
  yieldConfig.baseYield = BigInt.fromI32(event.params.baseYield);
  yieldConfig.plotType = plotType.id;

  // Yield Details
  yieldConfig.minYield = BigInt.fromI32(event.params.minYield);
  yieldConfig.maxYield = BigInt.fromI32(event.params.maxYield);

  // Dimensions
  // (bits 1 - 4) width || (bits 5 - 8) height
  yieldConfig.width = BigInt.fromI32(event.params.plotWidth);
  // (bits 5 - 8) height
  yieldConfig.height = BigInt.fromI32(event.params.plotHeight);
  // # Amount that needs to be staked in each tile
  yieldConfig.tileArea = BigInt.fromI32(event.params.tileArea);

  yieldConfig.save();
}

export function handleUpdateYieldConfig(event: UpdatedYieldConfig): void {
  let yieldConfig = YieldConfig.load(event.params.yieldTableId.toString());

  if (yieldConfig == null) {
    yieldConfig = new YieldConfig(event.params.yieldTableId.toString());
  }

  // Yield Details
  yieldConfig.minYield = BigInt.fromI32(event.params.minYield);
  yieldConfig.maxYield = BigInt.fromI32(event.params.maxYield);

  yieldConfig.save();
}

export function handleActivateYieldConfig(event: ActivatedYieldConfig): void {
  let yieldConfig = YieldConfig.load(event.params.yieldTableId.toString());

  if (yieldConfig == null) {
    yieldConfig = new YieldConfig(event.params.yieldTableId.toString());
  }

  yieldConfig.isActive = true;
  yieldConfig.save();
}

export function handleDeactivateYieldConfig(
  event: DeactivatedYieldConfig
): void {
  let yieldConfig = YieldConfig.load(event.params.yieldTableId.toString());

  if (yieldConfig == null) {
    yieldConfig = new YieldConfig(event.params.yieldTableId.toString());
  }

  yieldConfig.isActive = false;
  yieldConfig.save();
}
