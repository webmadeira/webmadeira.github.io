import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H3, Body2 } from '../../../../../components/typography'

const LocationContainer = styled.div`
  text-align: left;
  margin-right: 8px;
`

const LocationName = styled.a`
  color: ${props => props.theme.color('neutral', 'bright')};
  margin-top: 14px;
`

const LocationDetails = styled.div`
  margin-top: 15px;
`

const Location = ({ location }) => (
  <LocationContainer>
    <H3>LOCATION</H3>
    <LocationDetails>
      <LocationName href={location.link} target="_black" rel="noopener">
        <Body2>{location.name}</Body2>
      </LocationName>
      <Body2>{location.address}</Body2>
      <Body2>{location.postCode}</Body2>
    </LocationDetails>
  </LocationContainer>
)

Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    postCode: PropTypes.string,
  }).isRequired,
}

export default Location
