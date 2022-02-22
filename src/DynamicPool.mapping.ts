import {
  Paused,
  Unpaused,
  UpdatedGoldReserveAmount,
  UpdatedTokenReserveAmount,
  TransferredFromPool,
  ScaledPoolBalances,
  InitializedPool,
  SentToTreasury
} from "../generated/DynamicPool/DynamicPool";
import {
  Crop,
  GameState,
  Pool,
  Token,
  TokenFlow,
  TransactionFlow
} from "../generated/schema";

export function handlePaused(event: Paused): void {
  let gameState = GameState.load("DynamicPool");

  if (gameState == null) {
    gameState = new GameState("DynamicPool");
  }
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpaused(event: Unpaused): void {
  let gameState = GameState.load("DynamicPool");

  if (gameState == null) {
    gameState = new GameState("DynamicPool");
  }
  gameState.isPaused = false;
  gameState.save();
}

export function handleUpdateGoldReserve(event: UpdatedGoldReserveAmount): void {
  const pool = Pool.load(event.params.tokenAddress.toString());

  pool.goldReserveAmount = event.params.newGoldReserveAmount;

  pool.save();
}

export function handleUpdateTokenReserve(
  event: UpdatedTokenReserveAmount
): void {
  const pool = Pool.load(event.params.tokenAddress.toString());

  pool.tokenReserveAmount = event.params.newTokenReserveAmount;

  pool.save();
}

export function handleTransferFromPool(event: TransferredFromPool): void {
  // Update the overall pool details
  const pool = Pool.load(event.params.tokenAddress.toString());

  pool.tokenTrackedAmount = event.params.updatedTokenBalance;
  pool.goldTrackedAmount = event.params.updatedGoldBalance;

  pool.save();

  // Add a new gold flow
  const goldFlow = new TokenFlow(`${event.transaction.hash}-gold`);
  goldFlow.timestamp = event.block.timestamp;
  goldFlow.blockIndex = event.transaction.index;
  goldFlow.pool = pool.id;
  goldFlow.counterParty = event.params.destinationAddress;
  goldFlow.token = Token.load(event.params.goldAddress.toString()).id;
  goldFlow.tokenAmount = event.params.goldDelta;
  goldFlow.isGold = true;
  goldFlow.isDirectionIntoPool =
    (event.params.isSwapperAdding && event.params.isInputTokenAmountGold) ||
    (!event.params.isSwapperAdding && !event.params.isInputTokenAmountGold);
  goldFlow.save();

  // Add a new token flow
  const tokenFlow = new TokenFlow(`${event.transaction.hash}-token`);
  tokenFlow.timestamp = event.block.timestamp;
  tokenFlow.blockIndex = event.transaction.index;
  tokenFlow.pool = pool.id;
  tokenFlow.counterParty = event.params.destinationAddress;
  tokenFlow.token = Token.load(event.params.tokenAddress.toString()).id;
  tokenFlow.tokenAmount = event.params.tokenDelta;
  tokenFlow.isGold = false;
  tokenFlow.isDirectionIntoPool =
    (event.params.isSwapperAdding && !event.params.isInputTokenAmountGold) ||
    (!event.params.isSwapperAdding && event.params.isInputTokenAmountGold);
  tokenFlow.save();

  // Add a new transaction flow
  const transactionFlow = new TransactionFlow(
    `${event.transaction.hash}-${event.logIndex.toString()}`
  );
  transactionFlow.timestamp = event.block.timestamp;
  transactionFlow.blockIndex = event.transaction.index;
  transactionFlow.pool = pool.id;
  transactionFlow.counterParty = event.params.destinationAddress;
  transactionFlow.isGoldInbound = goldFlow.isDirectionIntoPool;

  transactionFlow.flowIn = tokenFlow.isDirectionIntoPool
    ? tokenFlow.id
    : goldFlow.id;

  transactionFlow.flowOut = tokenFlow.isDirectionIntoPool
    ? goldFlow.id
    : tokenFlow.id;

  transactionFlow.save();
}

export function handleScalePoolBalances(event: ScaledPoolBalances): void {
  const pool = Pool.load(event.params.tokenAddress.toString());

  pool.tokenTrackedAmount = event.params.newTrackedTokenBalance;
  pool.goldTrackedAmount = event.params.newTrackedGoldBalance;

  pool.save();
}

export function handleInitializePool(event: InitializedPool): void {
  const pool = new Pool(event.params.tokenAddress.toString());

  pool.crop = Crop.load(event.params.tokenAddress.toString()).id;

  pool.tokenTrackedAmount = event.params.tokenAmount;
  pool.tokenReserveAmount = event.params.tokenReserveAmount;

  pool.goldTrackedAmount = event.params.goldAmount;
  pool.goldReserveAmount = event.params.goldReserveAmount;

  pool.save();
}

export function handleSendToTreasury(event: SentToTreasury): void {}
