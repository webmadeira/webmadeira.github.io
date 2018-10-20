import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Subtitle2 } from '../../../../../components/typography'
import EntryContent from './components/EntryContent/EntryContent'

const ListItem = styled.li`
  list-style: none;
  display: flex;

  :first-child .entry-info::before {
    top: 3px;
  }

  :last-child .entry-info::before {
    bottom: 42px;
  }
`

const TimeContainer = styled.div`
  padding-right: 45px;
  
  ${({ theme }) => theme.mixins.mediaQuery.phone`
    padding-right: 20px;
  `};  
`

const EntryInfo = styled.div`
  position: relative;
  padding-left: 45px;
  text-align: left;

  ${({ theme }) => theme.mixins.mediaQuery.phone`
    padding-left: 20px;
  `};  

  ::before {
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    display: block;
    width: 2px;
    content: "";
    background-color: ${props => props.theme.color('neutral', 'bright')};
  }
`

const ScheduleEntry = ({
  entry: {
    title,
    type,
    speakers,
    description,
    length,
    qaLength,
    time,
  },
}) => (
  <ListItem>
    <TimeContainer>
      <Subtitle2>{time}</Subtitle2>
    </TimeContainer>
    <EntryInfo className="entry-info">
      <EntryContent
        title={title}
        type={type}
        speakers={speakers}
        description={description}
        length={length}
        qaLength={qaLength}
      />
    </EntryInfo>
  </ListItem>
)

ScheduleEntry.propTypes = {
  entry: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speakers: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    length: PropTypes.number,
    qaLength: PropTypes.number,
  }).isRequired,
}

export default ScheduleEntry
