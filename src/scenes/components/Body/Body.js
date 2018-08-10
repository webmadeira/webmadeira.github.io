import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.section`
  flex-grow: 1;
  text-align: center;
  position: relative;
`

const Body = ({ children }) => (
  <Container>
    {children}
  </Container>
)

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
