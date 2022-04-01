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

export const constructYieldSubgraphId = (
  season: string,
  plotWidth: string,
  plotHeight: string,
  tileArea: string
): string => `${season}-
${plotWidth}-
${plotHeight}-
${tileArea}`;

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
  const yieldSubgraphId = constructYieldSubgraphId(
    event.params.season.toString(),
    event.params.plotWidth.toString(),
    event.params.plotHeight.toString(),
    event.params.tileArea.toString()
  );

  const yieldConfig = new YieldConfig(yieldSubgraphId);

  let plotType = PlotType.load(event.params.plotTypeId.toString());

  if (plotType == null) {
    plotType = new PlotType(event.params.plotTypeId.toString());
  }

  yieldConfig.yieldTableId = event.params.yieldTableId;
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
  const yieldSubgraphId = constructYieldSubgraphId(
    event.params.season.toString(),
    event.params.plotWidth.toString(),
    event.params.plotHeight.toString(),
    event.params.tileArea.toString()
  );
  let yieldConfig = YieldConfig.load(yieldSubgraphId);

  if (yieldConfig == null) {
    yieldConfig = new YieldConfig(yieldSubgraphId);
  }

  // Yield Details
  yieldConfig.minYield = BigInt.fromI32(event.params.minYield);
  yieldConfig.maxYield = BigInt.fromI32(event.params.maxYield);

  yieldConfig.save();
}

export function handleActivateYieldConfig(event: ActivatedYieldConfig): void {
  const yieldSubgraphId = constructYieldSubgraphId(
    event.params.season.toString(),
    event.params.plotWidth.toString(),
    event.params.plotHeight.toString(),
    event.params.tileArea.toString()
  );
  let yieldConfig = YieldConfig.load(yieldSubgraphId);

  if (yieldConfig == null) {
    yieldConfig = new YieldConfig(yieldSubgraphId);
  }

  yieldConfig.isActive = true;
  yieldConfig.save();
}

export function handleDeactivateYieldConfig(
  event: DeactivatedYieldConfig
): void {
  const yieldSubgraphId = constructYieldSubgraphId(
    event.params.season.toString(),
    event.params.plotWidth.toString(),
    event.params.plotHeight.toString(),
    event.params.tileArea.toString()
  );
  let yieldConfig = YieldConfig.load(yieldSubgraphId);

  if (yieldConfig == null) {
    yieldConfig = new YieldConfig(yieldSubgraphId);
  }

  yieldConfig.isActive = false;
  yieldConfig.save();
}
