// a list of tokens by chain
import { Currency, Token } from '@uniswap/sdk-core'
import { SupportedChainId } from 'constants/chains'

import {
  USDC_MAINNET,
  USDC_MANTA,
  USDC_MANTA_TESTNET,
  USDT_MANTA,
  USDT_MANTA_TESTNET,
  WMANTA_MANTA_TESTNET,
  WRAPPED_NATIVE_CURRENCY,
} from './tokens'

type ChainTokenList = {
  readonly [chainId: number]: Token[]
}

type ChainCurrencyList = {
  readonly [chainId: number]: Currency[]
}

const WRAPPED_NATIVE_CURRENCIES_ONLY: ChainTokenList = Object.fromEntries(
  Object.entries(WRAPPED_NATIVE_CURRENCY)
    .map(([key, value]) => [key, [value]])
    .filter(Boolean)
)

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.MAINNET]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MAINNET],
    USDC_MAINNET,
  ],
  [SupportedChainId.MANTA]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MANTA],
    USDC_MANTA,
    USDT_MANTA,
  ],
  [SupportedChainId.MANTA_TESTNET]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MANTA_TESTNET],
    USDT_MANTA_TESTNET,
    USDC_MANTA_TESTNET,
    WMANTA_MANTA_TESTNET,
  ]
}
export const ADDITIONAL_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  [SupportedChainId.MAINNET]: {
  },
}
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  [SupportedChainId.MAINNET]: {
  },
}

/**
 * Shows up in the currency select for swap and add liquidity
 */
export const COMMON_BASES: ChainCurrencyList = {
  [SupportedChainId.MAINNET]: [
    nativeOnChain(SupportedChainId.MAINNET),
    USDC_MAINNET,
    WRAPPED_NATIVE_CURRENCY[SupportedChainId.MAINNET] as Token,
  ],
  [SupportedChainId.MANTA_TESTNET]: [
    nativeOnChain(SupportedChainId.MANTA_TESTNET),
    USDT_MANTA_TESTNET,
    USDC_MANTA_TESTNET,
    WMANTA_MANTA_TESTNET,
  ],
  [SupportedChainId.MANTA]: [
    nativeOnChain(SupportedChainId.MANTA),
    USDC_MANTA,
    USDT_MANTA,
  ],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_NATIVE_CURRENCIES_ONLY,
  [SupportedChainId.MAINNET]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MAINNET],
    USDC_MAINNET,
  ],
  [SupportedChainId.MANTA_TESTNET]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MANTA_TESTNET],
    USDT_MANTA_TESTNET,
    USDC_MANTA_TESTNET,
    WMANTA_MANTA_TESTNET,
  ],
  [SupportedChainId.MANTA]: [
    ...WRAPPED_NATIVE_CURRENCIES_ONLY[SupportedChainId.MANTA],
    USDC_MANTA,
    USDT_MANTA,
  ],
}
export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
  [SupportedChainId.MANTA]: [
    [USDC_MANTA, USDT_MANTA]
  ],
  [SupportedChainId.MANTA_TESTNET]: [
    [USDC_MANTA_TESTNET, USDT_MANTA_TESTNET],
    [USDC_MANTA_TESTNET, WMANTA_MANTA_TESTNET]
  ],
}
