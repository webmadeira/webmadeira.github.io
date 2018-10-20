import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppContainer from '../../../components/AppContainer/AppContainer'
import { H2 } from '../../../components/typography'
import ScheduleEntry from './components/ScheduleEntry/ScheduleEntry'

const Root = styled(AppContainer)`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${props => props.theme.color('secondary', 'dark')};
  color: ${props => props.theme.color('neutral', 'bright')};
`

const Title = styled(H2)`
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 80px;
  
  ${({ theme }) => theme.mixins.mediaQuery.phone`
    margin-bottom: 40px;
  `};
`

const renderSchedule = schedule => schedule.map(entry => (
  <ScheduleEntry entry={entry} key={entry.id} />
))

const Schedule = ({ schedule }) => (
  <Root>
    <Title>Schedule</Title>
    <ul>
      {renderSchedule(schedule)}
    </ul>
  </Root>
)

Schedule.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Schedule
