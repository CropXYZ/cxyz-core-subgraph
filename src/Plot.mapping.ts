import { BigInt } from "@graphprotocol/graph-ts";
import {
  ClearedDiedHarvest,
  ClearedHarvest,
  HarvestedPlot,
  MintedPlot,
  Paused,
  StakedCrop,
  Unpaused
} from "../generated/Plot/Plot";

import { Crop, GameState, GrowthTimeTable, Plot } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("Plot");

  if (gameState == null) {
    gameState = new GameState("Plot");
  }
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("Plot");

  if (gameState == null) {
    gameState = new GameState("Plot");
  }
  gameState.isPaused = false;
  gameState.save();
}

export function handleStaked(event: StakedCrop): void {
  let plot = Plot.load(event.params.plotId.toString());

  if (plot == null) {
    plot = new Plot(event.params.plotId.toString());
  }

  plot.stakedCrop = event.params.stakedElement.toString();
  plot.amountStaked = BigInt.fromI32(event.params.stakedAmount);

  plot.timeStartStaked = event.params.timeStartStaked;
  plot.timeReadyDelta = event.params.timeReadyDelta;
  plot.timeExpiredDelta = event.params.timeExpiredDelta;

  plot.save();
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

const updatePlotDetails = (
  timestamp: BigInt,
  cropElement: Crop | null,
  plot: Plot
): void => {
  if (cropElement == null) {
    plot.stakedCrop = null;
    plot.amountStaked = BigInt.fromI32(0);
    plot.timeStartStaked = BigInt.fromI32(0);
    plot.timeReadyDelta = BigInt.fromI32(0);
    plot.timeExpiredDelta = BigInt.fromI32(0);
  } else {
    // Restaking in the plot
    let timeSet = GrowthTimeTable.load(cropElement.growthTimeTable);

    if (timeSet == null) {
      timeSet = new GrowthTimeTable(cropElement.growthTimeTable);
    }

    plot.stakedCrop = cropElement.id;
    plot.timeStartStaked = timestamp;
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

export function handleHarvestPlot(event: HarvestedPlot): void {
  let plot = Plot.load(event.params.plotId.toString());

  if (plot == null) {
    plot = new Plot(event.params.plotId.toString());
  }

  plot.countHarvests = BigInt.fromI32(event.params.plotHarvests);

  const cropElement = Crop.load(event.params.newStakedElement.toString());
  updatePlotDetails(event.block.timestamp, cropElement, plot);
}

export function handleClearDiedHarvest(event: ClearedDiedHarvest): void {
  let plot = Plot.load(event.params.plotId.toString());

  if (plot == null) {
    plot = new Plot(event.params.plotId.toString());
  }

  plot.countDeathClears = BigInt.fromI32(event.params.plotDeaths);

  const cropElement = Crop.load(event.params.newStakedElement.toString());
  updatePlotDetails(event.block.timestamp, cropElement, plot);
}

export function handleClearedHarvest(event: ClearedHarvest): void {
  let plot = Plot.load(event.params.plotId.toString());

  if (plot == null) {
    plot = new Plot(event.params.plotId.toString());
  }

  plot.countClears = BigInt.fromI32(event.params.plotClears);

  const cropElement = Crop.load(event.params.newStakedElement.toString());
  updatePlotDetails(event.block.timestamp, cropElement, plot);
}
