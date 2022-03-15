import {
  Paused,
  Unpaused,
  ActivatedPlotType
} from "../generated/PlotType/PlotType";
import { GameState, PlotType } from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("PlotType");

  if (gameState == null) {
    gameState = new GameState("PlotType");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("PlotType");

  if (gameState == null) {
    gameState = new GameState("PlotType");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handleActivatePlotType(event: ActivatedPlotType): void {
  const plotType = new PlotType(event.params.plotTypeId.toString());
  plotType.name = event.params.plotType;
  plotType.save();
}
