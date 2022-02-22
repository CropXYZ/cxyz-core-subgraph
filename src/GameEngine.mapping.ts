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
  Plot,
  PlotType,
  Pool,
  Token,
  TokenFlow,
  TransactionFlow,
  YieldConfig
} from "../generated/schema";

export function handlePaused(event: Paused): void {
  let gameState = GameState.load("GameEngine");

  if (gameState == null) {
    gameState = new GameState("GameEngine");
  }
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpaused(event: Unpaused): void {
  let gameState = GameState.load("GameEngine");

  if (gameState == null) {
    gameState = new GameState("GameEngine");
  }
  gameState.isPaused = false;
  gameState.save();
}

export function handlePauseGame(event: PausedGame): void {
  let gameState = GameState.load("OverallGameState");

  if (gameState == null) {
    gameState = new GameState("OverallGameState");
  }
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpauseGame(event: UnpausedGame): void {
  let gameState = GameState.load("OverallGameState");

  if (gameState == null) {
    gameState = new GameState("OverallGameState");
  }
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
  const timeTable = new GrowthTimeTable(
    event.params.timeBreakdownId.toString()
  );

  timeTable.elementName = event.params.stakedElementName;
  timeTable.elementNameHash = event.params.stakedElementNameHash;
  timeTable.addressNameHash = event.params.addressStoreNameHash;

  timeTable.deltaNothingToStart = event.params.nothingToStart;
  timeTable.deltaStartToEarly = event.params.startToEarly;
  timeTable.deltaEarlyToMature = event.params.earlyToMature;
  timeTable.deltaMatureToExpire = event.params.matureToExpire;

  timeTable.save();
}

export function handleUpdateTimeBreakdown(event: UpdatedTimeBreakdown): void {
  const timeTable = GrowthTimeTable.load(
    event.params.timeBreakdownId.toString()
  );

  timeTable.deltaNothingToStart = event.params.newNothingToStart;
  timeTable.deltaStartToEarly = event.params.newStartToEarly;
  timeTable.deltaEarlyToMature = event.params.newEarlyToMature;
  timeTable.deltaMatureToExpire = event.params.newMatureToExpire;

  timeTable.save();
}

export function handleUpdateTimeBreakdownAddress(
  event: UpdatedTimeBreakdownAddress
): void {
  const timeTable = GrowthTimeTable.load(
    event.params.timeBreakdownId.toString()
  );
  timeTable.addressNameHash = event.params.newAddressStoreNameHash;
  timeTable.save();
}

export function handleActivateTimeBreakdown(
  event: ActivatedTimeBreakdown
): void {
  const timeTable = GrowthTimeTable.load(
    event.params.timeBreakdownId.toString()
  );
  timeTable.isActive = true;
  timeTable.save();
}

export function handleDeactivateTimeBreakdown(
  event: DeactivatedTimeBreakdown
): void {
  const timeTable = GrowthTimeTable.load(
    event.params.timeBreakdownId.toString()
  );
  timeTable.isActive = false;
  timeTable.save();
}

export function handleAddYieldConfig(event: AddedYieldConfig): void {
  const yieldConfig = new YieldConfig(event.params.yieldTableId.toString());

  const plotType = PlotType.load(event.params.plotTypeId.toString());

  yieldConfig.isActive = event.params.isActive;
  yieldConfig.baseYield = event.params.baseYield;
  yieldConfig.plotType = plotType.id;

  // Yield Details
  yieldConfig.minYield = event.params.minYield;
  yieldConfig.maxYield = event.params.maxYield;

  // Dimensions
  // (bits 1 - 4) width || (bits 5 - 8) height
  yieldConfig.width = event.params.plotWidth;
  // (bits 5 - 8) height
  yieldConfig.height = event.params.plotHeight;
  // # Amount that needs to be staked in each tile
  yieldConfig.tileArea = event.params.tileArea;

  yieldConfig.save();
}

export function handleUpdateYieldConfig(event: UpdatedYieldConfig): void {
  const yieldConfig = YieldConfig.load(event.params.yieldTableId.toString());

  // Yield Details
  yieldConfig.minYield = event.params.minYield;
  yieldConfig.maxYield = event.params.maxYield;

  yieldConfig.save();
}

export function handleActivateYieldConfig(event: ActivatedYieldConfig): void {
  const yieldConfig = YieldConfig.load(event.params.yieldTableId.toString());
  yieldConfig.isActive = true;
  yieldConfig.save();
}

export function handleDeactivateYieldConfig(
  event: DeactivatedYieldConfig
): void {
  const yieldConfig = YieldConfig.load(event.params.yieldTableId.toString());
  yieldConfig.isActive = false;
  yieldConfig.save();
}
