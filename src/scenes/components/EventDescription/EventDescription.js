import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppContainer from '../../../components/AppContainer/AppContainer'

const Container = styled.div`
  padding: 30% 10px 5% 10px;
`

const Description = styled.p`
  text-align: left;
  font-size: ${props => props.theme.textSetting('nr').fontSize};
  color: ${props => props.theme.color('neutral', 'bright')};
`

const EventDescription = ({ description, children }) => (
  <AppContainer type="primary">
    <Container>
      <Description>{description}</Description>
      {children}
    </Container>
  </AppContainer>
)

EventDescription.propTypes = {
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default EventDescription
