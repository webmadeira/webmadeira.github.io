import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Root from './components/Root/Root'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import EventDescription from './components/EventDescription/EventDescription'
import Talks from './components/Talks/Talks'
import { getOrganizationDetails } from '../store/actions/organization'
import { getEventDetails, getPastEvents } from '../store/actions/event'
import { getSpeakers } from '../store/actions/speaker'
import Speakers from './components/Speakers/Speakers'

class HomeContainer extends React.Component {
  static propTypes = {
    getOrganizationDetails: PropTypes.func.isRequired,
    getEventDetails: PropTypes.func.isRequired,
    getSpeakers: PropTypes.func.isRequired,
    getPastEvents: PropTypes.func.isRequired,
    event: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
      ]),
      description: PropTypes.string.isRequired,
      talks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      pastEvents: PropTypes.PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          link: PropTypes.string,
          name: PropTypes.string,
        })).isRequired,
    }).isRequired,
    speakers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    organization: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      social: PropTypes.PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          path: PropTypes.string,
        })).isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.getOrganizationDetails()
    this.props.getEventDetails(0)
    this.props.getSpeakers(2018)
    this.props.getPastEvents()
  }

  render() {
    const { speakers } = this.props
    const { logo, social } = this.props.organization
    const {
      title,
      date,
      description,
      talks,
      pastEvents,
    } = this.props.event

    return (
      <Root>
        <Header title={title} date={date} logo={logo} />
        <Body>
          <EventDescription
            description={description}
          >
            <Talks numTalks={talks.length} />
          </EventDescription>
          <Speakers speakers={speakers} />
        </Body>
        <Footer pastEvents={pastEvents} social={social} />
      </Root>
    )
  }
}

function mapStateToProps({ event, organization, speaker: { speakers } }) {
  let newDate = event.date
  let modifinedEvent = event

  if ((event.date) && (typeof event.date === 'object')) {
    const month = newDate.toLocaleString('en-us', { month: 'short' })
    const day = event.date.getDate()

    newDate = `<${month}.${day} />`
    modifinedEvent = {
      ...event,
      date: newDate,
    }
  }

  return {
    speakers,
    organization,
    event: modifinedEvent,
  }
}

const mapDispatchToProps = {
  getOrganizationDetails,
  getEventDetails,
  getSpeakers,
  getPastEvents,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
