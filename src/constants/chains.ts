/*
 * SupportedChainId must be defined inline, without using @uniswap/sdk-core, so that its members are their own types
 * {@see https://www.typescriptlang.org/docs/handbook/enums.html#union-enums-and-enum-member-types}. This allows the
 * derived const arrays and their types (eg {@link L1_CHAIN_IDS}, {@link SupportedL1ChainId}) to be narrowed and used
 * to enforce chain typing.
 *
 * Because this is not explicitly derived from @uniswap/sdk-core, there is a unit test to enforce conformance.
 */
export enum SupportedChainId {
  MAINNET = 1,
  MANTA = 169,
  MANTA_TESTNET = 3441005
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.MAINNET]: 'mainnet',
  [SupportedChainId.MANTA]: 'manta',
  [SupportedChainId.MANTA_TESTNET]: 'manta-testnet',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

export function isSupportedChain(chainId: number | null | undefined): chainId is SupportedChainId {
  return !!chainId && !!SupportedChainId[chainId]
}

export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.MANTA,
  SupportedChainId.MANTA_TESTNET,
] as const

/**
 * Unsupported networks for V2 pool behavior.
 */
export const UNSUPPORTED_V2POOL_CHAIN_IDS = [
  SupportedChainId.MANTA,
  SupportedChainId.MANTA_TESTNET,
] as const

// const TESTNET_CHAIN_IDS = [
//   SupportedChainId.GOERLI,
//   SupportedChainId.POLYGON_MUMBAI,
//   SupportedChainId.ARBITRUM_GOERLI,
//   SupportedChainId.OPTIMISM_GOERLI,
// ] as const

// type SupportedTestnetChainId = (typeof TESTNET_CHAIN_IDS)[number]

/**
 * All the chain IDs that are running the Ethereum protocol.
 */
const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
] as const

export type SupportedL1ChainId = (typeof L1_CHAIN_IDS)[number]

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS = [
  SupportedChainId.MANTA,
  SupportedChainId.MANTA_TESTNET
] as const

export type SupportedL2ChainId = (typeof L2_CHAIN_IDS)[number]
