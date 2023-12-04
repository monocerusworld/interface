import { SupportedChainId } from 'constants/chains'

const BLOCK_EXPLORER_PREFIXES: { [chainId: number]: string } = {
  [SupportedChainId.MAINNET]: 'https://etherscan.io',
  [SupportedChainId.MANTA]: 'https://pacific-explorer.manta.network/',
  [SupportedChainId.MANTA_TESTNET]: 'https://pacific-explorer.testnet.manta.network/',
}

export enum ExplorerDataType {
  TRANSACTION = 'transaction',
  TOKEN = 'token',
  ADDRESS = 'address',
  BLOCK = 'block',
}

/**
 * Return the explorer link for the given data and data type
 * @param chainId the ID of the chain for which to return the data
 * @param data the data to return a link for
 * @param type the type of the data
 */
export function getExplorerLink(chainId: number, data: string, type: ExplorerDataType): string {
  if (chainId === SupportedChainId.MANTA) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://pacific-explorer.manta.network/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://pacific-explorer.manta.network/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://pacific-explorer.manta.network/block/${data}`
      default:
        return `https://pacific-explorer.manta.network`
    }
  }

  if (chainId === SupportedChainId.MANTA_TESTNET) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return `https://pacific-explorer.testnet.manta.network/tx/${data}`
      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return `https://pacific-explorer.testnet.manta.network/address/${data}`
      case ExplorerDataType.BLOCK:
        return `https://pacific-explorer.testnet.manta.network/block/${data}`
      default:
        return `https://pacific-explorer.testnet.manta.network/`
    }
  }

  const prefix = BLOCK_EXPLORER_PREFIXES[chainId] ?? 'https://etherscan.io'

  switch (type) {
    case ExplorerDataType.TRANSACTION:
      return `${prefix}/tx/${data}`

    case ExplorerDataType.TOKEN:
      return `${prefix}/token/${data}`

    case ExplorerDataType.BLOCK:
      if (chainId === SupportedChainId.MANTA || chainId === SupportedChainId.MANTA_TESTNET) {
        return `${prefix}/tx/${data}`
      }
      return `${prefix}/block/${data}`

    case ExplorerDataType.ADDRESS:
      return `${prefix}/address/${data}`
    default:
      return `${prefix}`
  }
}
