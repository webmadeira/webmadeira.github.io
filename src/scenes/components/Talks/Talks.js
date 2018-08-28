import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import ResponsiveSquare from '../../../components/ResponsiveSquare/ResponsiveSquare'
import { H1, H2, H3, Body1, Caption } from '../../../components/typography'
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

const Talks = ({ numTalks }) => (
  <TalksContainer>
    <ResponsiveSquare width="15%" minWidth="80px">
      <NumTalks>
        <MediaQuery minWidth={deviceWidths.tablet}>
          <H1>{numTalks}</H1>
          <H2>Talks</H2>
        </MediaQuery>
        <MediaQuery maxWidth={deviceWidths.tablet}>
          <H2>{numTalks}</H2>
          <Caption>Talks</Caption>
        </MediaQuery>
      </NumTalks>
    </ResponsiveSquare>
    <TalksFormatsContainer>
      <MediaQuery minWidth={deviceWidths.tablet}>
        <TalksFormat><H3>{'5min {"Express talks"}'}</H3></TalksFormat>
        <TalksFormat><H3>{'20min {"Standard talks"}'}</H3></TalksFormat>
      </MediaQuery>
      <MediaQuery maxWidth={deviceWidths.tablet}>
        <TalksFormat><Body1>{'5min {"Express talks"}'}</Body1></TalksFormat>
        <TalksFormat><Body1>{'20min {"Standard talks"}'}</Body1></TalksFormat>
      </MediaQuery>
    </TalksFormatsContainer>
  </TalksContainer>
)

Talks.propTypes = {
  numTalks: PropTypes.number.isRequired,
}

export default Talks
