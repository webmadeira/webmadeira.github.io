import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Root = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`

const Sponsor = styled.li`
  list-style: none;
  padding: 0 15px;
`

const renderSponsors = sponsors => sponsors.map(sponsor => (
  <Sponsor key={sponsor.id}>
    <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
      <img src={sponsor.logo} alt={sponsor.name} />
    </a>
  </Sponsor>
))

const Sponsors = ({ sponsors }) => (
  <Root>
    {renderSponsors(sponsors)}
  </Root>
)

Sponsors.propTypes = {
  sponsors: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Sponsors
