import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppContainer from '../../../components/AppContainer/AppContainer'
import DigitalMountain from './components/DigitalMountain/DigitalMountain'

const Root = styled.div`
  position: relative;
  overflow: hidden;
`

const Container = styled.div`
  padding-top: 20%;
  padding-bottom: 5%;
`

const Description = styled.p`
  text-align: left;
  font-size: ${props => props.theme.textSetting('nr').fontSize};
  color: ${props => props.theme.color('neutral', 'bright')};
`

const EventDescription = ({ description, children }) => (
  <Root>
    <DigitalMountain />
    <AppContainer type="primary">
      <Container>
        <Description>{description}</Description>
        {children}
      </Container>
    </AppContainer>
  </Root>
)

EventDescription.propTypes = {
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default EventDescription
