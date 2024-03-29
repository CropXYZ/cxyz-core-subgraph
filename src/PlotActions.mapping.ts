import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  ClearedDiedHarvest,
  ClearedHarvest,
  HarvestedPlot,
  Paused,
  StakedCrop,
  Unpaused
} from "../generated/PlotActions/PlotActions";

import {
  Crop,
  GameState,
  GrowthTimeTable,
  Plot,
  PlotAction
} from "../generated/schema";

// // // // // // // // // // // // // // // // // // // //
// UTILS
// // // // // // // // // // // // // // // // // // // //
const PlotCropAction_clearDead = "CLEAR_DEAD";
const PlotCropAction_clearGrowing = "CLEAR_GROWING";
const PlotCropAction_harvest = "HARVEST";
const PlotCropAction_plant = "PLANT";

const createPlotAction = (
  transactionTimestamp: BigInt,
  transactionIndex: BigInt,
  actionType: string,
  playerAddress: Bytes,
  plotId: string,
  currentCropId: string,
  newCropId: string,
  cropAmount: BigInt
): void => {
  const plotActionId = `${plotId}-${transactionTimestamp}-${transactionIndex}`;
  let plotAction = PlotAction.load(plotActionId);

  if (plotAction == null) {
    plotAction = new PlotAction(plotActionId);
  }

  plotAction.timestamp = transactionTimestamp;
  plotAction.blockIndex = transactionIndex;

  plotAction.plot = plotId;
  plotAction.playerAddress = playerAddress;
  plotAction.amount = cropAmount;
  plotAction.actionType = actionType;

  // The current staked element id is in reference to the time table,
  // so it is possible to use that to pull the crop it is referenceing.
  const currentTimeSet = GrowthTimeTable.load(currentCropId);
  plotAction.currentCrop = currentTimeSet != null ? currentTimeSet.crop : null;

  // The new staked element id is in reference to the time table,
  // so it is possible to use that to pull the crop it is referenceing.
  const newTimeSet = GrowthTimeTable.load(newCropId);
  plotAction.newCrop = newTimeSet != null ? newTimeSet.crop : null;

  plotAction.save();
};

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

// // // // // // // // // // // // // // // // // // // //
// HANDLERS
// // // // // // // // // // // // // // // // // // // //

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

  // Add the plot actions
  createPlotAction(
    // transactionTimestamp,
    event.block.timestamp,
    // transactionIndex,
    event.transaction.index,
    // actionType,
    PlotCropAction_plant,
    // playerAddress,
    event.params.player,
    // plotId,
    event.params.plotId.toString(),
    // currentCropId,
    "0",
    // newCropId,
    event.params.stakedElement.toString(),
    // cropAmount
    BigInt.fromI32(event.params.stakedAmount)
  );
}

export function handleHarvestPlot(event: HarvestedPlot): void {
  let plot = Plot.load(event.params.plotId.toString());

  if (plot == null) {
    plot = new Plot(event.params.plotId.toString());
  }

  plot.countHarvests = BigInt.fromI32(event.params.plotHarvests);

  const cropId = event.params.newStakedElement.toString();
  const cropElement = Crop.load(cropId);
  updatePlotDetails(event.block.timestamp, cropElement, plot);

  // Add the plot actions
  createPlotAction(
    // transactionTimestamp,
    event.block.timestamp,
    // transactionIndex,
    event.transaction.index,
    // actionType,
    PlotCropAction_harvest,
    // playerAddress,
    event.params.player,
    // plotId,
    event.params.plotId.toString(),
    // currentCropId,
    event.params.stakedElement.toString(),
    // newCropId,
    cropId,
    // cropAmount
    BigInt.fromI32(event.params.harvestableAmount)
  );
}

export function handleClearDiedHarvest(event: ClearedDiedHarvest): void {
  let plot = Plot.load(event.params.plotId.toString());

  if (plot == null) {
    plot = new Plot(event.params.plotId.toString());
  }

  plot.countDeathClears = BigInt.fromI32(event.params.plotDeaths);

  const cropId = event.params.newStakedElement.toString();
  const cropElement = Crop.load(cropId);
  updatePlotDetails(event.block.timestamp, cropElement, plot);

  // Add the plot actions
  createPlotAction(
    // transactionTimestamp,
    event.block.timestamp,
    // transactionIndex,
    event.transaction.index,
    // actionType,
    PlotCropAction_clearDead,
    // playerAddress,
    event.params.player,
    // plotId,
    event.params.plotId.toString(),
    // currentCropId,
    event.params.diedStakedElement.toString(),
    // newCropId,
    cropId,
    // cropAmount
    BigInt.fromI32(event.params.diedAmount)
  );
}

export function handleClearedHarvest(event: ClearedHarvest): void {
  let plot = Plot.load(event.params.plotId.toString());

  if (plot == null) {
    plot = new Plot(event.params.plotId.toString());
  }

  plot.countClears = BigInt.fromI32(event.params.plotClears);

  const cropId = event.params.newStakedElement.toString();
  const cropElement = Crop.load(cropId);
  updatePlotDetails(event.block.timestamp, cropElement, plot);

  // Add the plot actions
  createPlotAction(
    // transactionTimestamp,
    event.block.timestamp,
    // transactionIndex,
    event.transaction.index,
    // actionType,
    PlotCropAction_clearGrowing,
    // playerAddress,
    event.params.player,
    // plotId,
    event.params.plotId.toString(),
    // currentCropId,
    event.params.clearedStakedElement.toString(),
    // newCropId,
    cropId,
    // cropAmount
    BigInt.fromI32(event.params.clearedAmount)
  );
}
