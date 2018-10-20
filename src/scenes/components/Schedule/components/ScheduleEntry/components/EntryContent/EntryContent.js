import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Subtitle1,
  Caption,
  Body1,
  Body2,
} from '../../../../../../../components/typography'
import deviceWidths from '../../../../../../../theme/device-widths'

const ENTRY_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

const Root = styled.div`
  margin-bottom: 35px;
`

const EntryTitle = styled(Subtitle1)`
  margin-bottom: 10px;
  position: relative;
`

const EntryBody = styled(Subtitle1)`
  margin-bottom: 12px;
`

const LengthLabel = styled(Caption)`
  color: ${props => props.theme.color('secondary', 'light')};
`

const Bullet = styled.div`
  ${({ theme, type }) => {
    let size
    let positionLeft
    let positionTop
    let color

    if (type === ENTRY_TYPES.PRIMARY) {
      size = 24
      positionLeft = -56
      positionTop = -2
      color = theme.color('brand', 'light')
    } else {
      size = 12
      positionLeft = -50
      positionTop = 4
      color = theme.color('neutral', 'bright')
    }

    return `
      position: absolute;
      bottom: 0;
      left: ${positionLeft}px;
      top: ${positionTop}px;
      display: block;
      width: ${size}px;
      height: ${size}px;
      content: "";
      background-color: ${color};
      border: 2px solid ${theme.color('neutral', 'bright')};
      border-radius: ${size}px;

      @media (max-width: ${deviceWidths.phone / 16}em) {
        width: ${size - 6}px;
        height: ${size - 6}px;
        left: ${positionLeft + 28}px;
      }
    `
  }};
`

const EntryContent = ({
  title,
  type,
  speakers,
  description,
  length,
  qaLength,
}) => {
  const entryType = (type === 'talk' || type === 'primary') ? ENTRY_TYPES.PRIMARY : ENTRY_TYPES.SECONDARY

  const speakerInfo = speakers && (
    <EntryBody>
      <Body1>{speakers.join(', ')}</Body1>
      <Body2>{description}</Body2>
    </EntryBody>
  )

  let timeInfo

  if (length && qaLength) {
    timeInfo = (<LengthLabel>{length}min + {qaLength}min</LengthLabel>)
  } else if (length) {
    timeInfo = (<LengthLabel>{length}min</LengthLabel>)
  }

  return (
    <Root>
      <EntryTitle>
        <Bullet type={entryType} />
        {title}
      </EntryTitle>
      {speakerInfo}
      {timeInfo}
    </Root>
  )
}

EntryContent.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  speakers: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  length: PropTypes.number,
  qaLength: PropTypes.number,
}

EntryContent.defaultProps = {
  speakers: undefined,
  description: undefined,
  length: undefined,
  qaLength: undefined,
  type: undefined,
}

export default EntryContent
