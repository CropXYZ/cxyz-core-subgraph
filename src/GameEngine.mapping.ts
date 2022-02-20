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

export function handleComplexPurchase(
  event: SetOfTokenOutGoldInSwapped
): void {}

export function handleSimplePurchase(
  event: TokenOutGoldInSwapped
): void {}

export function handleSimpleSell(
  event: TokenInGoldOutSwapped
): void {}

export function handlePauseGame(
  event: PausedGame
): void {}

export function handleUnpauseGame(
  event: UnpausedGame
): void {}

export function handleActivatePlotType(
  event: ActivatedPlotType
): void {}

export function handleAddTimeBreakdown(
  event: AddedTimeBreakdown
): void {}

export function handleUpdateTimeBreakdownAddress(
  event: UpdatedTimeBreakdownAddress
): void {}

export function handleUpdateTimeBreakdown(
  event: UpdatedTimeBreakdown
): void {}

export function handleActivateTimeBreakdown(
  event: ActivatedTimeBreakdown
): void {}

export function handleDeactivateTimeBreakdown(
  event: DeactivatedTimeBreakdown
): void {}

export function handleAddYieldConfig(
  event: AddedYieldConfig
): void {}

export function handleUpdateYieldConfig(
  event: UpdatedYieldConfig
): void {}

export function handleActivateYieldConfig(
  event: ActivatedYieldConfig
): void {}

export function handleDeactivateYieldConfig(
  event: DeactivatedYieldConfig
): void {}
