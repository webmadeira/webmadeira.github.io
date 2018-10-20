import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Schedule from '../../components/Schedule/Schedule'

const ScheduleContainer = ({ schedule }) => (
  <Schedule schedule={schedule} />
)

ScheduleContainer.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = ({ event: { schedule }, speaker: { speakers } }) => ({
  schedule: schedule.map(entry => ({
    ...entry,
    speakers: !entry.speakersIds ?
      [] :
      entry.speakersIds
        .map((id) => {
          const speaker = speakers.find(item => item.id === id)
          return speaker ? speaker.name : ''
        }),
  })),
})

export default connect(mapStateToProps)(ScheduleContainer)
