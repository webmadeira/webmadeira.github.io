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

const HomeContainer = ({ description, talks }) => (
  <Root>
    <Header />
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

HomeContainer.propTypes = {
  description: PropTypes.string.isRequired,
  talks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = () => ({
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper aliquam massa vel aliquam. Duis eleifend fermentum tortor eu pulvinar. Duis maximus mauris nec metus blandit aliquet. Nulla consequat massa a vehicula rutrum. Maecenas et eleifend purus. Aenean maximus ac sem sed mollis. Donec varius lobortis risus, eget bibendum dui vestibulum vel. Ut ullamcorper faucibus porttitor. Curabitur id imperdiet dolor. Proin finibus euismod neque vel dapibus. Maecenas congue urna non dictum gravida. Nam ultrices vestibulum urna, quis aliquam nisl iaculis nec. Pellentesque rutrum, erat vel malesuada facilisis, erat velit semper nisi, ac porttitor enim dolor at diam. Duis non erat ac turpis vehicula euismod. Sed dignissim eros ut est vestibulum iaculis.',
  talks: [
    { id: 0, description: '' },
    { id: 1, description: '' },
    { id: 2, description: '' },
    { id: 3, description: '' },
    { id: 4, description: '' },
    { id: 5, description: '' },
    { id: 6, description: '' },
    { id: 7, description: '' },
    { id: 8, description: '' },
    { id: 9, description: '' },
  ],
})

export default connect(mapStateToProps)(HomeContainer)
