import {
  Paused,
  Unpaused,
  SetOfTokenOutGoldInSwapped,
  TokenOutGoldInSwapped,
  TokenInGoldOutSwapped,
  PausedGame,
  UnpausedGame
} from "../generated/GameEngine/GameEngine";
import { GameState } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("GameEngine");

  if (gameState == null) {
    gameState = new GameState("GameEngine");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("GameEngine");

  if (gameState == null) {
    gameState = new GameState("GameEngine");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handlePauseGame(event: PausedGame): void {
  let gameState = GameState.load("OverallGameState");

  if (gameState == null) {
    gameState = new GameState("OverallGameState");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpauseGame(event: UnpausedGame): void {
  let gameState = GameState.load("OverallGameState");

  if (gameState == null) {
    gameState = new GameState("OverallGameState");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handleComplexPurchase(
  event: SetOfTokenOutGoldInSwapped
): void {}

export function handleSimplePurchase(event: TokenOutGoldInSwapped): void {}

export function handleSimpleSell(event: TokenInGoldOutSwapped): void {}
