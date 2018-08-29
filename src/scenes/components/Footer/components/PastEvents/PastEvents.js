import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H3, Caption } from '../../../../../components/typography'

const WebConferencesList = styled.ul`
  list-style-type: none;
  text-align: left;
  margin-top: 15px;
`

const WebConferencesListItem = styled.li`
  margin-bottom: 8px;
`

const WebConferenceLink = styled.a`
  color: ${props => props.theme.color('neutral', 'bright')};
`

const getPastEventsItems = events => events.map(event => (
  <WebConferencesListItem key={event.id}>
    <WebConferenceLink href={event.url} rel="noopener" target="_blank">
      <Caption>{event.name}</Caption>
    </WebConferenceLink>
  </WebConferencesListItem>
))

const PastEvents = ({ pastEvents }) => (
  <div>
    <H3>PAST EVENTS</H3>
    <WebConferencesList>
      {getPastEventsItems(pastEvents)}
    </WebConferencesList>
  </div>
)

PastEvents.propTypes = {
  pastEvents: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string,
    })).isRequired,
}

export default PastEvents
