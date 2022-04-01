import { BigInt } from "@graphprotocol/graph-ts";
import { MintedPlot, Paused, Unpaused } from "../generated/PlotCore/PlotCore";

import { GameState, Plot } from "../generated/schema";

import { constructYieldSubgraphId } from "./YieldTable.mapping";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("Plot");

  if (gameState == null) {
    gameState = new GameState("Plot");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("Plot");

  if (gameState == null) {
    gameState = new GameState("Plot");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handleMint(event: MintedPlot): void {
  const plot = new Plot(event.params.id.toString());

  // The season of the plot
  plot.season = BigInt.fromI32(event.params.season);
  // Dimensions
  // (bits 1 - 4) width || (bits 5 - 8) height
  plot.width = BigInt.fromI32(event.params.width);
  // (bits 5 - 8) height
  plot.height = BigInt.fromI32(event.params.height);
  // Amount that needs to be staked in each tile
  plot.tileArea = BigInt.fromI32(event.params.tileArea);

  // ----- ----- ----- ----- -----
  // Yield config
  plot.yieldConfig = constructYieldSubgraphId(
    event.params.season.toString(),
    event.params.width.toString(),
    event.params.height.toString(),
    event.params.tileArea.toString()
  );

  // ----- ----- ----- ----- -----
  // Base speed
  plot.baseSpeed = BigInt.fromI32(event.params.baseGrowthSpeed);
  // Base yield
  plot.baseYield = BigInt.fromI32(event.params.baseYield);
  // The plot type
  plot.plotType = event.params.plotTypeId.toString();

  // ----- ----- ----- ----- -----
  // Count of clears that were not the result of a death or harvest
  plot.countClears = BigInt.fromI32(0);
  // Count of clears because of a death
  plot.countDeathClears = BigInt.fromI32(0);
  // Count of clears because of a successful harvest
  plot.countHarvests = BigInt.fromI32(0);

  // ----- ----- ----- ----- -----
  // Keeping track of how much was staked and how long
  // The currently staked element
  plot.stakedCrop = null;

  // Keeping track of how much was staked
  plot.amountStaked = BigInt.fromI32(0);
  // The time it was staked
  plot.timeStartStaked = BigInt.fromI32(0);
  // The time it can be reclaimed staked
  plot.timeReadyDelta = BigInt.fromI32(0);
  // The time it can no longer be claimed and must be cleared
  plot.timeExpiredDelta = BigInt.fromI32(0);

  plot.save();
}
