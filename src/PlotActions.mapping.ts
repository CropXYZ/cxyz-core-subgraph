import { BigInt } from "@graphprotocol/graph-ts";
import {
  ClearedDiedHarvest,
  ClearedHarvest,
  HarvestedPlot,
  Paused,
  StakedCrop,
  Unpaused
} from "../generated/PlotActions/PlotActions";

import { Crop, GameState, GrowthTimeTable, Plot } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("PlotActions");

  if (gameState == null) {
    gameState = new GameState("PlotActions");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("PlotActions");

  if (gameState == null) {
    gameState = new GameState("PlotActions");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handleStaked(event: StakedCrop): void {
  let plot = Plot.load(event.params.plotId.toString());

  if (plot == null) {
    plot = new Plot(event.params.plotId.toString());
  }

  // The current staked element id is in reference to the time table,
  // so it is possible to use that to pull the crop it is referenceing.
  let timeSet = GrowthTimeTable.load(event.params.stakedElement.toString());

  if (timeSet == null) {
    timeSet = new GrowthTimeTable(event.params.stakedElement.toString());
  }

  plot.stakedCrop = timeSet.crop;
  plot.amountStaked = BigInt.fromI32(event.params.stakedAmount);

  plot.timeStartStaked = event.params.timeStartStaked;
  plot.timeReadyDelta = event.params.timeReadyDelta;
  plot.timeExpiredDelta = event.params.timeExpiredDelta;

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
