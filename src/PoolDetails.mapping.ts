import { BigInt } from "@graphprotocol/graph-ts";

import {
  Paused,
  Unpaused,
  UpdatedGoldReserveAmount,
  UpdatedTokenReserveAmount,
  ScaledPoolBalances,
  InitializedPool
} from "../generated/PoolDetails/PoolDetails";
import { GameState, Pool } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("PoolDetails");

  if (gameState == null) {
    gameState = new GameState("PoolDetails");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("PoolDetails");

  if (gameState == null) {
    gameState = new GameState("PoolDetails");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handleUpdateGoldReserve(event: UpdatedGoldReserveAmount): void {
  let pool = Pool.load(event.params.tokenAddress.toHexString());

  if (pool == null) {
    pool = new Pool(event.params.tokenAddress.toHexString());
  }

  pool.goldReserveAmount = event.params.newGoldReserveAmount;

  pool.save();
}

export function handleUpdateTokenReserve(
  event: UpdatedTokenReserveAmount
): void {
  let pool = Pool.load(event.params.tokenAddress.toHexString());

  if (pool == null) {
    pool = new Pool(event.params.tokenAddress.toHexString());
  }

  pool.tokenReserveAmount = event.params.newTokenReserveAmount;

  pool.save();
}

export function handleScalePoolBalances(event: ScaledPoolBalances): void {
  let pool = Pool.load(event.params.tokenAddress.toHexString());

  if (pool == null) {
    pool = new Pool(event.params.tokenAddress.toHexString());
  }

  pool.swapFee = BigInt.fromI32(event.params.newSwapFee);
  pool.tokenTrackedAmount = event.params.newTrackedTokenBalance;
  pool.goldTrackedAmount = event.params.newTrackedGoldBalance;

  pool.save();
}

export function handleInitializePool(event: InitializedPool): void {
  const pool = new Pool(event.params.tokenAddress.toHexString());

  pool.tokenAddress = event.params.tokenAddress;
  pool.swapFee = BigInt.fromI32(event.params.swapFee);

  pool.tokenTrackedAmount = event.params.tokenAmount;
  pool.tokenReserveAmount = event.params.tokenReserveAmount;

  pool.goldTrackedAmount = event.params.goldAmount;
  pool.goldReserveAmount = event.params.goldReserveAmount;

  pool.save();
}
