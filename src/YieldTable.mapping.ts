import { BigInt } from "@graphprotocol/graph-ts";

import {
  Paused,
  Unpaused,
  AddedYieldConfig,
  UpdatedYieldConfig,
  ActivatedYieldConfig,
  DeactivatedYieldConfig
} from "../generated/YieldTable/YieldTable";
import { GameState, PlotType, YieldConfig } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("YieldTable");

  if (gameState == null) {
    gameState = new GameState("YieldTable");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("YieldTable");

  if (gameState == null) {
    gameState = new GameState("YieldTable");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
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
