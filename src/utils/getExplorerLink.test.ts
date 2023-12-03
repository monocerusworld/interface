import { SupportedChainId } from 'constants/chains'

import { ExplorerDataType, getExplorerLink } from './getExplorerLink'

describe('#getExplorerLink', () => {
  it('correct for tx', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.TRANSACTION)).toEqual('https://etherscan.io/tx/abc')
  })
  it('correct for token', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.TOKEN)).toEqual('https://etherscan.io/token/abc')
  })
  it('correct for address', () => {
    expect(getExplorerLink(1, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://etherscan.io/address/abc')
  })
  it('unrecognized chain id defaults to mainnet', () => {
    expect(getExplorerLink(2, 'abc', ExplorerDataType.ADDRESS)).toEqual('https://etherscan.io/address/abc')
  })
  it('manta', () => {
    expect(getExplorerLink(SupportedChainId.MANTA, 'abc', ExplorerDataType.ADDRESS)).toEqual(
      'https://pacific-explorer.manta.network/'
    )
  })
  it('manta-testnet', () => {
    expect(getExplorerLink(SupportedChainId.MANTA_TESTNET, 'abc', ExplorerDataType.ADDRESS)).toEqual(
      'https://pacific-explorer.testnet.manta.network/'
    )
  })

})
