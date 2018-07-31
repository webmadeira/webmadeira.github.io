import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Root from './components/Root/Root'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import EventDescription from './components/EventDescription/EventDescription'
import Talks from './components/Talks/Talks'
import DigitalMountain from './components/DigitalMountain/DigitalMountain'
import { getOrganizationDetails } from '../store/actions/organization'
import { getEventDetails } from '../store/actions/event'

class HomeContainer extends React.Component {
  static propTypes = {
    getOrganizationDetails: PropTypes.func.isRequired,
    getEventDetails: PropTypes.func.isRequired,
    event: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
      ]),
      description: PropTypes.string.isRequired,
      talks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
    organization: PropTypes.shape({
      logo: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.getOrganizationDetails()
    this.props.getEventDetails(0)
  }

  render() {
    const {
      title,
      date,
      description,
      talks,
    } = this.props.event
    const { logo } = this.props.organization

    return (
      <Root>
        <Header title={title} date={date} logo={logo} />
        <Body>
          <DigitalMountain />
          <EventDescription
            description={description}
          >
            <Talks numTalks={talks.length} />
          </EventDescription>
        </Body>
        <Footer />
      </Root>
    )
  }
}

function mapStateToProps(state) {
  let newDate = state.event.date
  let modifinedEvent = state.event

  if ((state.event.date) && (typeof state.event.date === 'object')) {
    const month = newDate.toLocaleString('en-us', { month: 'short' })
    const day = state.event.date.getDate()

    newDate = `<${month}.${day} />`
    modifinedEvent = {
      ...state.event,
      date: newDate,
    }
  }

  return {
    ...state,
    event: modifinedEvent,
  }
}

const mapDispatchToProps = {
  getOrganizationDetails,
  getEventDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
