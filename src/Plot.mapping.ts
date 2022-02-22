import { BigInt } from "@graphprotocol/graph-ts";
import {
  Paused,
  Unpaused,
  MintedPlot,
  HarvestedPlot,
  ClearedDiedHarvest,
  ClearedHarvest
} from "../generated/Plot/Plot";

import {
  Crop,
  GameState,
  GrowthTimeTable,
  Plot,
  PlotType
} from "../generated/schema";

export function handlePaused(event: Paused): void {
  let gameState = GameState.load("Plot");

  if (gameState == null) {
    gameState = new GameState("Plot");
  }
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpaused(event: Unpaused): void {
  let gameState = GameState.load("Plot");

  if (gameState == null) {
    gameState = new GameState("Plot");
  }
  gameState.isPaused = false;
  gameState.save();
}

export function handleMint(event: MintedPlot): void {
  const plot = new Plot(event.params.id.toString());

  // The season of the plot
  plot.season = event.params.season.toHex();
  // Dimensions
  // (bits 1 - 4) width || (bits 5 - 8) height
  plot.width = event.params.width.toHex();
  // (bits 5 - 8) height
  plot.height = event.params.height.toHex();
  // Amount that needs to be staked in each tile
  plot.tileArea = event.params.tileArea.toHex();

  // ----- ----- ----- ----- -----
  // Base speed
  plot.baseSpeed = event.params.baseGrowthSpeed.toHex();
  // Base yield
  plot.baseYield = event.params.baseYield.toHex();
  // The plot type
  const plotTypeId = event.params.id.toString();
  let plotType = PlotType.load(plotTypeId);
  plot.plotType = plotType.id;

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

export function handleHarvestPlot(event: HarvestedPlot): void {
  let plot = Plot.load(event.params.plotId.toString());
  plot.countHarvests = event.params.plotHarvests;

  updatePlotDetails(event, plot);
}

export function handleClearDiedHarvest(event: ClearedDiedHarvest): void {
  let plot = Plot.load(event.params.plotId.toString());
  plot.countDeathClears = event.params.plotDeaths;

  updatePlotDetails(event, plot);
}

export function handleClearedHarvest(event: ClearedHarvest): void {
  let plot = Plot.load(event.params.plotId.toString());
  plot.countClears = event.params.plotClears;

  updatePlotDetails(event, plot);
}

const updatePlotDetails = (event: any, plot: Plot) => {
  let cropElement = Crop.load(event.params.newStakedElement.toString());

  if (cropElement == null) {
    plot.stakedCrop = null;
    plot.amountStaked = BigInt.fromI32(0);
    plot.timeStartStaked = BigInt.fromI32(0);
    plot.timeReadyDelta = BigInt.fromI32(0);
    plot.timeExpiredDelta = BigInt.fromI32(0);
  } else {
    const timeSet = GrowthTimeTable.load(cropElement.growthTimeTable);
    plot.stakedCrop = cropElement.id;
    plot.timeStartStaked = event.block.timestamp;
    plot.timeReadyDelta = timeSet.deltaNothingToStart.plus(
      timeSet.deltaStartToEarly.plus(timeSet.deltaEarlyToMature)
    );
    plot.timeExpiredDelta = timeSet.deltaNothingToStart.plus(
      timeSet.deltaStartToEarly.plus(
        timeSet.deltaEarlyToMature.plus(timeSet.deltaMatureToExpire)
      )
    );
  }

  plot.save();
};
