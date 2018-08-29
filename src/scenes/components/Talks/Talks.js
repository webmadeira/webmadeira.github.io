import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import ResponsiveSquare from '../../../components/ResponsiveSquare/ResponsiveSquare'
import { H1, H2, H3, Caption } from '../../../components/typography'
import deviceWidths from '../../../theme/device-widths'

const TalksContainer = styled.div`
  display: flex;
  margin: 60px 0;
`

const NumTalks = styled.div`
  ${props => props.theme.mixins.center()}
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color('secondary', 'light')};
  color: ${props => props.theme.color()};
`

const TalksFormatsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const TalksFormat = styled.div`
  color: ${props => props.theme.color('neutral', 'bright')};
  border: solid 1px ${props => props.theme.color('secondary', 'light')};
  color: ${props => props.theme.color('secondary', 'light')};
  margin-bottom: 15px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }
`

const ResponsiveH3 = styled(H3)`
  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    font-size: ${props => props.theme.textSetting('sm').fontSize};
    line-height: ${props => props.theme.textSetting('sm').lineHeight};
  `};
`

const pad = (number, width, padNumber) => {
  const z = padNumber || '0'
  const n = `${number}`
  return n.length >= width ? n : new Array((width - n.length) + 1).join(z) + n
}

const Talks = ({ numTalks }) => (
  <TalksContainer>
    <ResponsiveSquare width="15%" minWidth="80px">
      <NumTalks>
        <MediaQuery minWidth={deviceWidths.tablet}>
          <H1>{pad(numTalks, 2, 0)}</H1>
          <H2>Talks</H2>
        </MediaQuery>
        <MediaQuery maxWidth={deviceWidths.tablet - 1}>
          <H2>{pad(numTalks, 2, 0)}</H2>
          <Caption>Talks</Caption>
        </MediaQuery>
      </NumTalks>
    </ResponsiveSquare>
    <TalksFormatsContainer>
      <TalksFormat><ResponsiveH3>{'5min {"Lighting talks"}'}</ResponsiveH3></TalksFormat>
      <TalksFormat><ResponsiveH3>{'20min {"Standard talks"}'}</ResponsiveH3></TalksFormat>
    </TalksFormatsContainer>
  </TalksContainer>
)

Talks.propTypes = {
  numTalks: PropTypes.number.isRequired,
}

export default Talks
