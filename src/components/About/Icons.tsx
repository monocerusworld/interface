import styled from 'styled-components'

import { ReactComponent as DiscordI } from './images/discord.svg'
import { ReactComponent as GithubI } from './images/github.svg'
import { ReactComponent as GitbookI } from './images/gitbook.svg'
import { ReactComponent as TelegramI } from './images/telegram.svg'
import { ReactComponent as TwitterI } from './images/twitter-safe.svg'

export const DiscordIcon = styled(DiscordI)<{ size?: number; fill?: string }>`
  height: ${({ size }) => (size ? size + 'px' : '32px')};
  width: ${({ size }) => (size ? size + 'px' : '32px')};
  fill: ${({ fill }) => fill ?? '#676b5c'};
  opacity: 1;
`

export const TwitterIcon = styled(TwitterI)<{ size?: number; fill?: string }>`
  height: ${({ size }) => (size ? size + 'px' : '32px')};
  width: ${({ size }) => (size ? size + 'px' : '32px')};
  fill: ${({ fill }) => fill ?? '#676b5c'};
  opacity: 1;
`

export const GithubIcon = styled(GithubI)<{ size?: number; fill?: string }>`
  height: ${({ size }) => (size ? size + 'px' : '32px')};
  width: ${({ size }) => (size ? size + 'px' : '32px')};
  fill: ${({ fill }) => fill ?? '#676b5c'};
  opacity: 1;
`

export const GitbookIcon = styled(GitbookI)<{ size?: number; fill?: string }>`
  height: ${({ size }) => (size ? size + 'px' : '32px')};
  width: ${({ size }) => (size ? size + 'px' : '32px')};
  fill: ${({ fill }) => fill ?? '#676b5c'};
  opacity: 1;
`

export const TelegramIcon = styled(TelegramI)<{ size?: number; fill?: string }>`
height: ${({ size }) => (size ? size + 'px' : '32px')};
width: ${({ size }) => (size ? size + 'px' : '32px')};
fill: ${({ fill }) => fill ?? '#676b5c'};
opacity: 1;
`