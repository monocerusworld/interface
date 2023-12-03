import { Currency, Ether, NativeCurrency, Token, WETH9 } from '@uniswap/sdk-core'
import { SupportedChainId } from 'constants/chains'
import invariant from 'tiny-invariant'

import { UNI_ADDRESS } from './addresses'

export const NATIVE_CHAIN_ID = 'NATIVE'

// When decimals are not specified for an ERC20 token
// use default ERC20 token decimals as specified here:
// https://docs.openzeppelin.com/contracts/3.x/erc20
export const DEFAULT_ERC20_DECIMALS = 18

export const USDC_MAINNET = new Token(
  SupportedChainId.MAINNET,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD//C'
)


// MANTA_TESTNET Tokens
export const USDC_MANTA_TESTNET = new Token(
  SupportedChainId.MANTA_TESTNET,
  '0x8cDdB93BD8845aE509a6eC1e29836852A9b41b10',
  6,
  'USDC',
  'USD Coin'
)

export const USDT_MANTA_TESTNET = new Token(
  SupportedChainId.MANTA_TESTNET,
  '0xC5a38c67077B713d6f28097B3C10Cc7Cdd3433F9',
  6,
  'USDT',
  'Tether USD'
)

export const WMANTA_MANTA_TESTNET = new Token(
  SupportedChainId.MANTA_TESTNET,
  '0x226E0D9fBDE51708fC36Bb4E5d1af9728A285cF4',
  18,
  'WMANTA',
  'Wrapped MANTA'
)


// MANTA Tokens
export const USDT_MANTA = new Token(
  SupportedChainId.MANTA,
  '0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f',
  6,
  'USDT',
  'TetherToken'
)

export const USDC_MANTA = new Token(
  SupportedChainId.MANTA,
  '0xb73603C5d87fA094B7314C74ACE2e64D165016fb',
  6,
  'USDC',
  'USD Coin'
)

export const WETH_MANTA = new Token(
  SupportedChainId.MANTA,
  '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
  18,
  'WETH',
  'Wrapped Ether'
)


export const UNI: { [chainId: number]: Token } = {
  [SupportedChainId.MAINNET]: new Token(SupportedChainId.MAINNET, UNI_ADDRESS[1], 18, 'UNI', 'Uniswap'),
  [SupportedChainId.GOERLI]: new Token(SupportedChainId.GOERLI, UNI_ADDRESS[5], 18, 'UNI', 'Uniswap'),
}

export const WRAPPED_NATIVE_CURRENCY: { [chainId: number]: Token | undefined } = {
  ...(WETH9 as Record<SupportedChainId, Token>),
  [SupportedChainId.MANTA]: new Token(
    SupportedChainId.MANTA,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.MANTA_TESTNET]: new Token(
    SupportedChainId.MANTA_TESTNET,
    '0xAcc15dC74880C9944775448304B263D191c6077F',
    18,
    'WMANTA',
    'Wrapped MANTA'
  ),
}



function isMantaTestnet(chainId: number): chainId is SupportedChainId.MANTA_TESTNET {
  return chainId === SupportedChainId.MANTA_TESTNET
}

class MantaTestnetNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isMantaTestnet(this.chainId)) throw new Error('Not MantaTestnet')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isMantaTestnet(chainId)) throw new Error('Not MantaTestnet')
    super(chainId, 18, 'MANTA', 'MANTA')
  }
}

function isManta(chainId: number): chainId is SupportedChainId.MANTA {
  return chainId === SupportedChainId.MANTA
}

class MantaNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isManta(this.chainId)) throw new Error('Not MANTA')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isManta(chainId)) throw new Error('Not MANTA')
    super(chainId, 18, 'ETH', 'ETH')
  }
}

class ExtendedEther extends Ether {
  public get wrapped(): Token {
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    if (wrapped) return wrapped
    throw new Error('Unsupported chain ID')
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } = {}

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedExtendedEther[chainId] ?? (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency | Token } = {}
export function nativeOnChain(chainId: number): NativeCurrency | Token {
  if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId]
  let nativeCurrency: NativeCurrency | Token
  if (isManta(chainId)) {
    nativeCurrency = new MantaNativeCurrency(chainId)
  } else if (isMantaTestnet(chainId)) {
    nativeCurrency = new MantaTestnetNativeCurrency(chainId)
  } else {
    nativeCurrency = ExtendedEther.onChain(chainId)
  }
  return (cachedNativeCurrency[chainId] = nativeCurrency)
}

export const TOKEN_SHORTHANDS: { [shorthand: string]: { [chainId in SupportedChainId]?: string } } = {
  USDC: {
    [SupportedChainId.MAINNET]: USDC_MAINNET.address,
    [SupportedChainId.MANTA]: USDC_MANTA.address,
    [SupportedChainId.MANTA_TESTNET]: USDC_MANTA_TESTNET.address,
  },
}
