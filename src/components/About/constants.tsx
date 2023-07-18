import { InterfaceElementName } from '@uniswap/analytics-events'

import { Loader, ShoppingBag, PlayCircle, Play } from 'react-feather'
import styled from 'styled-components/macro'
import { lightTheme } from 'theme/colors'


import nftCardImgSrc from './images/nftCard.png'
import swapCardImgSrc from './images/swapCard.png'

export const MAIN_CARDS = [
  {
    to: '/pools',
    title: 'CLMM DEX (alpha version)',
    description: 'UniV3-based CLMM DEX with 20,000 X Capital Efficiency, boost your mining reward by targeting the price range and NFT-based farming multiplier',
    cta: 'Pool',
    darkBackgroundImgSrc: swapCardImgSrc,
    lightBackgroundImgSrc: swapCardImgSrc,
    elementName: InterfaceElementName.ABOUT_PAGE_SWAP_CARD,
  },
  {
    to: '#',//'https://monocerus.world/mintingpage',
    title: 'Moonlight Potion',
    description: 'Very Limited 600 vials of transformer NFT, morph your LP-NFT to SPARKLE-VX and get tons of Utilities. Be a Monocerus OG member and get a multitude of benefits',
    cta: 'Mint',
    darkBackgroundImgSrc: nftCardImgSrc,
    lightBackgroundImgSrc: nftCardImgSrc,
    elementName: InterfaceElementName.ABOUT_PAGE_NFTS_CARD,
  },
]

const StyledCardLogo = styled.img`
  min-width: 20px;
  min-height: 20px;
  max-height: 48px;
  max-width: 48px;
`

export const MORE_CARDS = [
  {
    to: '#',//'https://monocerus.world/voxmorphia',
    external: true,
    title: 'SPARKLE-VX',
    description: 'Visit Voxmorphia and morph your LP-NFT to this Stunning Interactive 3D Voxel NFT with Play2Earn and Farming Booster Traits',
    lightIcon: <Loader color={lightTheme.textTertiary} size={36} />,
    darkIcon: <Loader color={lightTheme.textTertiary} size={36} />,
    cta: 'Morph',
    elementName: InterfaceElementName.ABOUT_PAGE_BUY_CRYPTO_CARD,
  },
  {
    to: '#',//'https://monocerus.world/tba',
    external: true,
    title: 'Token Bound Account',
    description: 'Allow your SPARKLE-VX to gather Tokens and Child NFTs (Rewards/Purchased Game Items) into single Account (by ERC-6551)',
    lightIcon: <ShoppingBag color={lightTheme.textTertiary} size={36} />,
    darkIcon: <ShoppingBag color={lightTheme.textTertiary} size={36}  />,
    cta: 'Create Account',
    elementName: InterfaceElementName.ABOUT_PAGE_DEV_DOCS_CARD,
  },
  {
    to: '#',//'https://monocerus.world/game',
    title: 'Mobile RPG',
    description: 'Use SPARKLE-VX as Passport for Seven Realms in Mobile RPG. Cash out Your in-game rewards in Monocerus Swap',
    lightIcon: <Play color={lightTheme.textTertiary} size={36} />,
    darkIcon: <Play color={lightTheme.textTertiary} size={36} />,
    cta: 'Play',
    elementName: InterfaceElementName.ABOUT_PAGE_EARN_CARD,
  },
  {
    to: '#',//'https://monocerus.world/minigame',
    title: 'Mini Games',
    description: 'Use SPARKLE-VX\'s built-in Play-to-Earn Traits in Mini Games. Earn more rewards in an easy and faster way',
    lightIcon: <PlayCircle color={lightTheme.textTertiary} size={36} />,
    darkIcon: <PlayCircle color={lightTheme.textTertiary} size={36} />,
    cta: 'Play',
    elementName: InterfaceElementName.ABOUT_PAGE_EARN_CARD,
  },

]
