import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AppContainer from '../../../components/AppContainer/AppContainer'

import PastEvents from './components/PastEvents/PastEvents'
import SocialLinks from './components/SocialLinks/SocialLinks'
import Location from './components/Location/Location'

const Root = styled(AppContainer)`
  background-color: ${props => props.theme.color('neutral', 'base')};
  padding: 80px 0;
`

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${props => props.theme.color('neutral', 'base')};
  color: ${props => props.theme.color('neutral', 'bright')};
  flex-wrap: wrap;

  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    flex-direction: column;
  `};
`

const Column = styled.div`
  flex-basis: 0;
  flex-grow: 1;

  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    &:not(:last-child) {
      margin-bottom: 45px;
    }
  `};
`


const Footer = ({ pastEvents, social, location }) => (
  <Root>
    <Container>
      <Column>
        <PastEvents pastEvents={pastEvents} />
      </Column>
      <Column>
        <SocialLinks links={social} />
      </Column>
      <Column>
        <Location location={location} />
      </Column>
    </Container>
  </Root>
)

Footer.propTypes = {
  pastEvents: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      path: PropTypes.string,
    })).isRequired,
  social: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      url: PropTypes.string,
    })).isRequired,
  location: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    postCode: PropTypes.string,
  }).isRequired,
}

export default Footer
