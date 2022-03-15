import { Paused, Unpaused } from "../generated/PlotMetadata/PlotMetadata";

import { GameState } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("PlotMetadata");

  if (gameState == null) {
    gameState = new GameState("PlotMetadata");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("PlotMetadata");

  if (gameState == null) {
    gameState = new GameState("PlotMetadata");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}
