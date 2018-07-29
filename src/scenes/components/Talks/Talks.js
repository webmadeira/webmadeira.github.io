import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ResponsiveSquare from '../../../components/ResponsiveSquare/ResponsiveSquare'
import { H2 } from '../../../components/typography'

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

const Total = styled.div`
  font-size: 60px;
  font-family: ${props => props.theme.fontFamily('secondary')}
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
    <ResponsiveSquare width="20%" minWidth="130px">
      <NumTalks>
        <Total>{numTalks}</Total>
        <H2>Talks</H2>
      </NumTalks>
    </ResponsiveSquare>
    <TalksFormatsContainer>
      <TalksFormat>{'5min { "Express talks" }'}</TalksFormat>
      <TalksFormat>{'20min { "Standard talks" }'}</TalksFormat>
    </TalksFormatsContainer>
  </TalksContainer>
)

Talks.propTypes = {
  numTalks: PropTypes.number.isRequired,
}

export default Talks
