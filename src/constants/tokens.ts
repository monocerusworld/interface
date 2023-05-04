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
const USDC_GOERLI = new Token(
  SupportedChainId.GOERLI,
  '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
  6,
  'USDC',
  'USD//C'
)
export const USDC_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  6,
  'USDC',
  'USD//C'
)
const USDC_OPTIMISM_GOERLI = new Token(
  SupportedChainId.OPTIMISM_GOERLI,
  '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E',
  6,
  'USDC',
  'USD//C'
)
export const USDC_ARBITRUM = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  6,
  'USDC',
  'USD//C'
)
export const USDC_ARBITRUM_GOERLI = new Token(
  SupportedChainId.ARBITRUM_GOERLI,
  '0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892',
  6,
  'USDC',
  'USD//C'
)
export const USDC_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  6,
  'USDC',
  'USD//C'
)
const USDC_POLYGON_MUMBAI = new Token(
  SupportedChainId.POLYGON_MUMBAI,
  '0xe11a86849d99f524cac3e7a0ec1241828e332c62',
  6,
  'USDC',
  'USD//C'
)
export const PORTAL_USDC_CELO = new Token(
  SupportedChainId.CELO,
  '0x37f750B7cC259A2f741AF45294f6a16572CF5cAd',
  6,
  'USDCet',
  'USDC (Portal from Ethereum)'
)
export const AMPL = new Token(
  SupportedChainId.MAINNET,
  '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
  9,
  'AMPL',
  'Ampleforth'
)
export const DAI = new Token(
  SupportedChainId.MAINNET,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const DAI_ARBITRUM_ONE = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai stable coin'
)
export const DAI_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai stable coin'
)
export const DAI_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USDT_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  6,
  'USDT',
  'Tether USD'
)
export const WBTC_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const USDT = new Token(
  SupportedChainId.MAINNET,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD'
)
export const USDT_ARBITRUM_ONE = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  6,
  'USDT',
  'Tether USD'
)
export const USDT_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
  6,
  'USDT',
  'Tether USD'
)
export const WBTC = new Token(
  SupportedChainId.MAINNET,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const WBTC_ARBITRUM_ONE = new Token(
  SupportedChainId.ARBITRUM_ONE,
  '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const WBTC_OPTIMISM = new Token(
  SupportedChainId.OPTIMISM,
  '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
  8,
  'WBTC',
  'Wrapped BTC'
)
export const FEI = new Token(
  SupportedChainId.MAINNET,
  '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
  18,
  'FEI',
  'Fei USD'
)
export const TRIBE = new Token(
  SupportedChainId.MAINNET,
  '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
  18,
  'TRIBE',
  'Tribe'
)
export const FRAX = new Token(
  SupportedChainId.MAINNET,
  '0x853d955aCEf822Db058eb8505911ED77F175b99e',
  18,
  'FRAX',
  'Frax'
)
export const FXS = new Token(
  SupportedChainId.MAINNET,
  '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
  18,
  'FXS',
  'Frax Share'
)
export const renBTC = new Token(
  SupportedChainId.MAINNET,
  '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  8,
  'renBTC',
  'renBTC'
)
export const ETH2X_FLI = new Token(
  SupportedChainId.MAINNET,
  '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD',
  18,
  'ETH2x-FLI',
  'ETH 2x Flexible Leverage Index'
)
export const sETH2 = new Token(
  SupportedChainId.MAINNET,
  '0xFe2e637202056d30016725477c5da089Ab0A043A',
  18,
  'sETH2',
  'StakeWise Staked ETH2'
)
export const rETH2 = new Token(
  SupportedChainId.MAINNET,
  '0x20BC832ca081b91433ff6c17f85701B6e92486c5',
  18,
  'rETH2',
  'StakeWise Reward ETH2'
)
export const SWISE = new Token(
  SupportedChainId.MAINNET,
  '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2',
  18,
  'SWISE',
  'StakeWise'
)
export const WETH_POLYGON_MUMBAI = new Token(
  SupportedChainId.POLYGON_MUMBAI,
  '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa',
  18,
  'WETH',
  'Wrapped Ether'
)

export const WETH_POLYGON = new Token(
  SupportedChainId.POLYGON,
  '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  18,
  'WETH',
  'Wrapped Ether'
)
const CELO_CELO = new Token(SupportedChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo')
export const CUSD_CELO = new Token(
  SupportedChainId.CELO,
  '0x765DE816845861e75A25fCA122bb6898B8B1282a',
  18,
  'cUSD',
  'Celo Dollar'
)
export const CEUR_CELO = new Token(
  SupportedChainId.CELO,
  '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
  18,
  'cEUR',
  'Celo Euro Stablecoin'
)
export const PORTAL_ETH_CELO = new Token(
  SupportedChainId.CELO,
  '0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207',
  18,
  'ETH',
  'Portal Ether'
)
export const CMC02_CELO = new Token(
  SupportedChainId.CELO,
  '0x32A9FE697a32135BFd313a6Ac28792DaE4D9979d',
  18,
  'cMCO2',
  'Celo Moss Carbon Credit'
)
const CELO_CELO_ALFAJORES = new Token(
  SupportedChainId.CELO_ALFAJORES,
  '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
  18,
  'CELO',
  'Celo'
)
export const CUSD_CELO_ALFAJORES = new Token(
  SupportedChainId.CELO_ALFAJORES,
  '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
  18,
  'CUSD',
  'Celo Dollar'
)
export const CEUR_CELO_ALFAJORES = new Token(
  SupportedChainId.CELO_ALFAJORES,
  '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F',
  18,
  'CEUR',
  'Celo Euro Stablecoin'
)

export const USDC_BSC = new Token(
  SupportedChainId.BNB,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'USDC'
)

export const USDT_BSC = new Token(
  SupportedChainId.BNB,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'USDT'
)

export const ETH_BSC = new Token(
  SupportedChainId.BNB,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Ethereum'
)

export const MATIC_BSC = new Token(
  SupportedChainId.BNB,
  '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
  18,
  'MATIC',
  'Matic'
)

export const FRAX_BSC = new Token(
  SupportedChainId.BNB,
  '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40',
  18,
  'FRAX',
  'FRAX'
)

export const BTC_BSC = new Token(SupportedChainId.BNB, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'BTCB')

export const CAKE_BSC = new Token(
  SupportedChainId.BNB,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'Cake'
)

export const BUSD_BSC = new Token(
  SupportedChainId.BNB,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'BUSD'
)

// FANTOM Tokens
export const BTC_FANTOM = new Token(
  SupportedChainId.FANTOM,
  '0x321162Cd933E2Be498Cd2267a90534A804051b11',
  8,
  'BTC',
  'Bitcoin'
)

export const DAI_FANTOM = new Token(
  SupportedChainId.FANTOM,
  '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
  18,
  'DAI',
  'DAI Stablecoin'
)

// export const ETH_FANTOM = new Token(
//   SupportedChainId.FANTOM,
//   '0x74b23882a30290451A17c44f4F05243b6b58C76d',
//   18,
//   'ETH',
//   'Ethereum'
// )

export const USDC_FANTOM = new Token(
  SupportedChainId.FANTOM,
  '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  6,
  'USDC',
  'USD Coin'
)

export const USDT_FANTOM = new Token(
  SupportedChainId.FANTOM,
  '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
  6,
  'fUSDT',
  'Frapped USDT'
)

// GNOSIS Tokens
export const BTC_GNOSIS = new Token(
  SupportedChainId.GNOSIS,
  '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252',
  8,
  'WBTC',
  'Wrapped BTC on xDai'
)

export const DAI_GNOSIS = new Token(
  SupportedChainId.GNOSIS,
  '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
  18,
  'WXDAI',
  'Wrapped XDAI'
)

// export const ETH_GNOSIS = new Token(
//   SupportedChainId.GNOSIS,
//   '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
//   18,
//   'WETH',
//   'Wrapped Ether on xDai'
// )

export const USDC_GNOSIS = new Token(
  SupportedChainId.GNOSIS,
  '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
  6,
  'USDC',
  'USD//C on xDai'
)

export const USDT_GNOSIS = new Token(
  SupportedChainId.GNOSIS,
  '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
  6,
  'USDT',
  'Tether USD on xDai'
)

// KLAYTN Tokens
export const BTC_KLAYTN = new Token(
  SupportedChainId.KLAYTN,
  '0x16d0e1fbd024c600ca0380a4c5d57ee7a2ecbf9c',
  8,
  'oWBTC',
  'Orbit Bridge Klaytn Wrapped BTC'
)

export const DAI_KLAYTN = new Token(
  SupportedChainId.KLAYTN,
  '0x5c74070fdea071359b86082bd9f9b3deaafbe32b',
  18,
  'KDAI',
  'Klaytn DAI'
)

// export const ETH_KLAYTN = new Token(
//   SupportedChainId.KLAYTN,
//   '0x34d21b1e550d73cee41151c77f3c73359527a396',
//   18,
//   'oETH',
//   'Orbit Bridge Klaytn Ethereum'
// )

export const USDC_KLAYTN = new Token(
  SupportedChainId.KLAYTN,
  '0x754288077d0ff82af7a5317c7cb8c444d421d103',
  6,
  'oUSDC',
  'Orbit Bridge Klaytn USD Coin'
)

export const USDT_KLAYTN = new Token(
  SupportedChainId.KLAYTN,
  '0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167',
  6,
  'oUSDT',
  'Orbit Bridge Klaytn USD Tether'
)

export const DAI_BSC = new Token(SupportedChainId.BNB, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'DAI')

// Moonbeam Tokens
export const USDC_MOONBEAM = new Token(
  SupportedChainId.MOONBEAM,
  '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
  6,
  'USDC',
  'USD Coin bridged using Multichain'
)

export const USDT_MOONBEAM = new Token(
  SupportedChainId.MOONBEAM,
  '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
  6,
  'USDT',
  'Tether USD'
)

export const WGLMR_MOONBEAM = new Token(
  SupportedChainId.MOONBEAM,
  '0xAcc15dC74880C9944775448304B263D191c6077F',
  18,
  'WGLMR',
  'Wrapped GLMR'
)

export const DAI_MOONBEAM = new Token(
  SupportedChainId.MOONBEAM,
  '0x765277EebeCA2e31912C9946eAe1021199B39C61',
  6,
  'DAI',
  'Dai on moonbeam bridged using Multichain'
)

export const WBTC_MOONBEAM = new Token(
  SupportedChainId.MOONBEAM,
  '0x922D641a426DcFFaeF11680e5358F34d97d112E1',
  8,
  'WBTC',
  'Wrapped BTC bridged using Multichain'
)

// Avalanche Tokens
export const USDT_AVALANCHE = new Token(
  SupportedChainId.AVALANCHE,
  '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
  6,
  'USDT',
  'TetherToken'
)

export const USDC_AVALANCHE = new Token(
  SupportedChainId.AVALANCHE,
  '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  6,
  'USDC',
  'USD Coin'
)

export const WAVAX_AVALANCHE = new Token(
  SupportedChainId.AVALANCHE,
  '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  18,
  'WAVAX',
  'Wrapped AVAX'
)

export const DAI_AVALANCHE = new Token(
  SupportedChainId.AVALANCHE,
  '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
  6,
  'DAI',
  'Dai Stablecoin'
)

export const WBTC_AVALANCHE = new Token(
  SupportedChainId.AVALANCHE,
  '0x50b7545627a5162F82A992c33b87aDc75187B218',
  8,
  'WBTC',
  'Wrapped BTC'
)

export const UNI: { [chainId: number]: Token } = {
  [SupportedChainId.MAINNET]: new Token(SupportedChainId.MAINNET, UNI_ADDRESS[1], 18, 'UNI', 'Uniswap'),
  [SupportedChainId.GOERLI]: new Token(SupportedChainId.GOERLI, UNI_ADDRESS[5], 18, 'UNI', 'Uniswap'),
}

export const WRAPPED_NATIVE_CURRENCY: { [chainId: number]: Token | undefined } = {
  ...(WETH9 as Record<SupportedChainId, Token>),
  [SupportedChainId.OPTIMISM]: new Token(
    SupportedChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.OPTIMISM_GOERLI]: new Token(
    SupportedChainId.OPTIMISM_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.ARBITRUM_ONE]: new Token(
    SupportedChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.ARBITRUM_GOERLI]: new Token(
    SupportedChainId.ARBITRUM_GOERLI,
    '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [SupportedChainId.POLYGON]: new Token(
    SupportedChainId.POLYGON,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),
  [SupportedChainId.POLYGON_MUMBAI]: new Token(
    SupportedChainId.POLYGON_MUMBAI,
    '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    18,
    'WMATIC',
    'Wrapped MATIC'
  ),
  [SupportedChainId.CELO]: new Token(
    SupportedChainId.CELO,
    '0x471ece3750da237f93b8e339c536989b8978a438',
    18,
    'CELO',
    'Celo native asset'
  ),
  [SupportedChainId.CELO_ALFAJORES]: new Token(
    SupportedChainId.CELO_ALFAJORES,
    '0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9',
    18,
    'CELO',
    'Celo native asset'
  ),
  [SupportedChainId.BNB]: new Token(
    SupportedChainId.BNB,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [SupportedChainId.FANTOM]: new Token(
    SupportedChainId.FANTOM,
    '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    18,
    'WFTM',
    'Wrapped FTM'
  ),
  [SupportedChainId.GNOSIS]: new Token(
    SupportedChainId.GNOSIS,
    '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    18,
    'WXDAI',
    'Wrapped XDAI on Gnosis'
  ),
  [SupportedChainId.KLAYTN]: new Token(
    SupportedChainId.KLAYTN,
    '0x19aac5f612f524b754ca7e7c41cbfa2e981a4432',
    18,
    'WKLAY',
    'Wrapped KLAY'
  ),
  [SupportedChainId.AVALANCHE]: new Token(
    SupportedChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [SupportedChainId.MOONBEAM]: new Token(
    SupportedChainId.MOONBEAM,
    '0xAcc15dC74880C9944775448304B263D191c6077F',
    18,
    'WGLMR',
    'Wrapped GLMR'
  ),
}

export function isCelo(chainId: number): chainId is SupportedChainId.CELO | SupportedChainId.CELO_ALFAJORES {
  return chainId === SupportedChainId.CELO_ALFAJORES || chainId === SupportedChainId.CELO
}

function getCeloNativeCurrency(chainId: number) {
  switch (chainId) {
    case SupportedChainId.CELO_ALFAJORES:
      return CELO_CELO_ALFAJORES
    case SupportedChainId.CELO:
      return CELO_CELO
    default:
      throw new Error('Not celo')
  }
}

function isMatic(chainId: number): chainId is SupportedChainId.POLYGON | SupportedChainId.POLYGON_MUMBAI {
  return chainId === SupportedChainId.POLYGON_MUMBAI || chainId === SupportedChainId.POLYGON
}

class MaticNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isMatic(this.chainId)) throw new Error('Not matic')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isMatic(chainId)) throw new Error('Not matic')
    super(chainId, 18, 'MATIC', 'Polygon Matic')
  }
}

function isBsc(chainId: number): chainId is SupportedChainId.BNB {
  return chainId === SupportedChainId.BNB
}

class BscNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isBsc(this.chainId)) throw new Error('Not bnb')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isBsc(chainId)) throw new Error('Not bnb')
    super(chainId, 18, 'BNB', 'BNB')
  }
}

function isFantom(chainId: number): chainId is SupportedChainId.FANTOM {
  return chainId === SupportedChainId.FANTOM
}

class FantomNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isFantom(this.chainId)) throw new Error('Not FANTOM')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isFantom(chainId)) throw new Error('Not FANTOM')
    super(chainId, 18, 'FTM', 'FANTOM')
  }
}

function isGnosis(chainId: number): chainId is SupportedChainId.GNOSIS {
  return chainId === SupportedChainId.GNOSIS
}

class GnosisNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isGnosis(this.chainId)) throw new Error('Not GNOSIS')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isGnosis(chainId)) throw new Error('Not GNOSIS')
    super(chainId, 18, 'XDAI', 'GNOSIS')
  }
}

function isKlaytn(chainId: number): chainId is SupportedChainId.KLAYTN {
  return chainId === SupportedChainId.KLAYTN
}

class KlaytnNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isKlaytn(this.chainId)) throw new Error('Not KLAYTN')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isKlaytn(chainId)) throw new Error('Not KLAYTN')
    super(chainId, 18, 'KLAY', 'KLAYTN')
  }
}

function isMoonbeam(chainId: number): chainId is SupportedChainId.MOONBEAM {
  return chainId === SupportedChainId.MOONBEAM
}

class MoonbeamNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isMoonbeam(this.chainId)) throw new Error('Not Moonbeam')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isMoonbeam(chainId)) throw new Error('Not Moonbeam')
    super(chainId, 18, 'GLMR', 'GLMR')
  }
}

function isAvalanche(chainId: number): chainId is SupportedChainId.AVALANCHE {
  return chainId === SupportedChainId.AVALANCHE
}

class AvalancheNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }

  get wrapped(): Token {
    if (!isAvalanche(this.chainId)) throw new Error('Not Avalanche')
    const wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId]
    invariant(wrapped instanceof Token)
    return wrapped
  }

  public constructor(chainId: number) {
    if (!isAvalanche(chainId)) throw new Error('Not Avalanche')
    super(chainId, 18, 'AVAX', 'AVAX')
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
  if (isMatic(chainId)) {
    nativeCurrency = new MaticNativeCurrency(chainId)
  } else if (isCelo(chainId)) {
    nativeCurrency = getCeloNativeCurrency(chainId)
  } else if (isBsc(chainId)) {
    nativeCurrency = new BscNativeCurrency(chainId)
  } else if (isFantom(chainId)) {
    nativeCurrency = new FantomNativeCurrency(chainId)
  } else if (isGnosis(chainId)) {
    nativeCurrency = new GnosisNativeCurrency(chainId)
  } else if (isKlaytn(chainId)) {
    nativeCurrency = new KlaytnNativeCurrency(chainId)
  } else if (isAvalanche(chainId)) {
    nativeCurrency = new AvalancheNativeCurrency(chainId)
  } else if (isMoonbeam(chainId)) {
    nativeCurrency = new MoonbeamNativeCurrency(chainId)
  } else {
    nativeCurrency = ExtendedEther.onChain(chainId)
  }
  return (cachedNativeCurrency[chainId] = nativeCurrency)
}

export const TOKEN_SHORTHANDS: { [shorthand: string]: { [chainId in SupportedChainId]?: string } } = {
  USDC: {
    [SupportedChainId.MAINNET]: USDC_MAINNET.address,
    [SupportedChainId.ARBITRUM_ONE]: USDC_ARBITRUM.address,
    [SupportedChainId.ARBITRUM_GOERLI]: USDC_ARBITRUM_GOERLI.address,
    [SupportedChainId.OPTIMISM]: USDC_OPTIMISM.address,
    [SupportedChainId.OPTIMISM_GOERLI]: USDC_OPTIMISM_GOERLI.address,
    [SupportedChainId.POLYGON]: USDC_POLYGON.address,
    [SupportedChainId.POLYGON_MUMBAI]: USDC_POLYGON_MUMBAI.address,
    [SupportedChainId.BNB]: USDC_BSC.address,
    [SupportedChainId.FANTOM]: USDC_FANTOM.address,
    [SupportedChainId.GNOSIS]: USDC_GNOSIS.address,
    [SupportedChainId.KLAYTN]: USDC_KLAYTN.address,
    [SupportedChainId.AVALANCHE]: USDC_AVALANCHE.address,
    [SupportedChainId.MOONBEAM]: USDC_MOONBEAM.address,
    [SupportedChainId.CELO]: PORTAL_USDC_CELO.address,
    [SupportedChainId.CELO_ALFAJORES]: PORTAL_USDC_CELO.address,
    [SupportedChainId.GOERLI]: USDC_GOERLI.address,
  },
}
