import { useWeb3React } from '@web3-react/core'
import Column from 'components/Column'
import { parseLocalActivity } from 'components/WalletDropdown/MiniPortfolio/Activity/parseLocal'
import { PortfolioLogo } from 'components/WalletDropdown/MiniPortfolio/PortfolioLogo'
import PortfolioRow from 'components/WalletDropdown/MiniPortfolio/PortfolioRow'
import useENSName from 'hooks/useENSName'
import { useCombinedActiveList } from 'state/lists/hooks'
import { useTransaction } from 'state/transactions/hooks'
import { TransactionDetails } from 'state/transactions/types'
import styled from 'styled-components'
import { EllipsisStyle, ThemedText } from 'theme'
import { ExplorerDataType, getExplorerLink } from 'utils/getExplorerLink'

import { PopupAlertTriangle } from './FailedNetworkSwitchPopup'

const Descriptor = styled(ThemedText.BodySmall)`
  ${EllipsisStyle}
`

function TransactionPopupContent({ tx, chainId }: { tx: TransactionDetails; chainId: number }) {
  const success = tx.receipt?.status === 1
  const tokens = useCombinedActiveList()
  const activity = parseLocalActivity(tx, chainId, tokens)
  const { ENSName } = useENSName(activity?.otherAccount)

  if (!activity) return null

  const explorerUrl = getExplorerLink(chainId, tx.hash, ExplorerDataType.TRANSACTION)

  return (
    <PortfolioRow
      left={
        success ? (
          <Column>
            <PortfolioLogo
              chainId={chainId}
              currencies={activity.currencies}
              images={activity.logos}
              accountAddress={activity.otherAccount}
            />
          </Column>
        ) : (
          <PopupAlertTriangle />
        )
      }
      title={<ThemedText.SubHeader fontWeight={500}>{activity.title}</ThemedText.SubHeader>}
      descriptor={
        <Descriptor color="textSecondary">
          {activity.descriptor}
          {ENSName ?? activity.otherAccount}
        </Descriptor>
      }
      onClick={() => window.open(explorerUrl, '_blank')}
    />
  )
}

export default function TransactionPopup({ hash }: { hash: string }) {
  const { chainId } = useWeb3React()

  const tx = useTransaction(hash)

  if (!chainId || !tx) return null

  return <TransactionPopupContent tx={tx} chainId={chainId} />
}
