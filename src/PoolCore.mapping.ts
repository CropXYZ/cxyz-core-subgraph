import {
  Paused,
  Unpaused,
  TransferredFromPool,
  SentToTreasury
} from "../generated/PoolCore/PoolCore";
import {
  GameState,
  Pool,
  TokenFlow,
  TransactionFlow
} from "../generated/schema";

export function handlePause(event: Paused): void {
  let gameState = GameState.load("PoolCore");

  if (gameState == null) {
    gameState = new GameState("PoolCore");
  }
  gameState.address = event.address;
  gameState.isPaused = true;
  gameState.save();
}

export function handleUnpause(event: Unpaused): void {
  let gameState = GameState.load("PoolCore");

  if (gameState == null) {
    gameState = new GameState("PoolCore");
  }
  gameState.address = event.address;
  gameState.isPaused = false;
  gameState.save();
}

export function handleSendToTreasury(event: SentToTreasury): void {}

export function handleTransferFromPool(event: TransferredFromPool): void {
  // Update the overall pool details
  let pool = Pool.load(event.params.tokenAddress.toHexString());

  if (pool == null) {
    pool = new Pool(event.params.tokenAddress.toHexString());
  }

  pool.tokenTrackedAmount = event.params.updatedTokenBalance;
  pool.goldTrackedAmount = event.params.updatedGoldBalance;

  pool.save();

  // Add a new gold flow
  const goldFlow = new TokenFlow(
    `${event.transaction.hash.toHexString()}-gold`
  );
  goldFlow.timestamp = event.block.timestamp;
  goldFlow.blockIndex = event.transaction.index;
  goldFlow.pool = pool.id;
  goldFlow.playerAddress = event.params.destinationAddress;
  goldFlow.tokenAddress = event.params.goldAddress;
  goldFlow.tokenAmount = event.params.goldDelta;
  goldFlow.isGold = true;
  goldFlow.isDirectionIntoPool =
    (event.params.isSwapperAdding && event.params.isInputTokenAmountGold) ||
    (!event.params.isSwapperAdding && !event.params.isInputTokenAmountGold);
  goldFlow.save();

  // Add a new token flow
  const tokenFlow = new TokenFlow(
    `${event.transaction.hash.toHexString()}-token`
  );
  tokenFlow.timestamp = event.block.timestamp;
  tokenFlow.blockIndex = event.transaction.index;
  tokenFlow.pool = pool.id;
  tokenFlow.playerAddress = event.params.destinationAddress;
  tokenFlow.tokenAddress = event.params.tokenAddress;
  tokenFlow.tokenAmount = event.params.tokenDelta;
  tokenFlow.isGold = false;
  tokenFlow.isDirectionIntoPool =
    (event.params.isSwapperAdding && !event.params.isInputTokenAmountGold) ||
    (!event.params.isSwapperAdding && event.params.isInputTokenAmountGold);
  tokenFlow.save();

  // Add a new transaction flow
  const transactionFlow = new TransactionFlow(
    `${event.transaction.hash.toHexString()}-${event.logIndex.toString()}`
  );
  transactionFlow.timestamp = event.block.timestamp;
  transactionFlow.blockIndex = event.transaction.index;
  transactionFlow.pool = pool.id;
  transactionFlow.playerAddress = event.params.destinationAddress;
  transactionFlow.isGoldInbound = goldFlow.isDirectionIntoPool;

  transactionFlow.flowIn = tokenFlow.isDirectionIntoPool
    ? tokenFlow.id
    : goldFlow.id;

  transactionFlow.flowOut = tokenFlow.isDirectionIntoPool
    ? goldFlow.id
    : tokenFlow.id;

  transactionFlow.save();
}
