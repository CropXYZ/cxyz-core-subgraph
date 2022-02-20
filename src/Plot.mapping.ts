import {
  Paused,
  Unpaused,
  MintedPlot,
  HarvestedPlot,
  ClearedDiedHarvest,
  ClearedHarvest
} from "../generated/Plot/Plot";

import {
  Plot,
  Crop,
  YieldConfig,
  GrowthTime,
  PlotType,
  Pool,
  Token,
  TransactionFlow,
  TokenFlow
} from "../generated/schema";

export function handlePause(
  event: Paused
): void {}

export function handleUnpause(
  event: Unpaused
): void {}

export function handleMint(
  event: MintedPlot
): void {}

export function handleHarvestPlot(
  event: HarvestedPlot
): void {}

export function handleClearDiedHarvest(
  event: ClearedDiedHarvest
): void {}

export function handleClearedHarvest(
  event: ClearedHarvest
): void {}
