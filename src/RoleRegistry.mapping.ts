import { Paused, Unpaused } from "../generated/RoleRegistry/RoleRegistry";
import { GameState } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("RoleRegistry");

  if (gameState == null) {
    gameState = new GameState("RoleRegistry");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("RoleRegistry");

  if (gameState == null) {
    gameState = new GameState("RoleRegistry");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}
