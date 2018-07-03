import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  border: 1px solid blue;
  flex-grow: 1;
`

const Body = () => (
  <Container>
    <p>Body!</p>
  </Container>
)

export default Body
