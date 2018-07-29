import React from 'react'
import styled from 'styled-components'

import {
  H1,
  H2,
  H3,
  Subtitle1,
  Body1,
  Body2,
  Body3,
  Body4,
  BUTTON,
  Caption,
} from '../../../components/typography'

const Container = styled.section`
  border: 1px solid blue;
  flex-grow: 1;
  text-align: center;
`

const Body = () => (
  <Container>
    <p><H1>H1</H1></p>
    <p><H2>H2</H2></p>
    <p><H3>H3</H3></p>
    <p><Subtitle1>Subtitle 1</Subtitle1></p>
    <p><Body1>Body 1</Body1></p>
    <p><Body2>Body 2</Body2></p>
    <p><Body3>Body 3</Body3></p>
    <p><Body4>Body 4</Body4></p>
    <p><BUTTON>Button</BUTTON></p>
    <p><Caption>Caption</Caption></p>
  </Container>
)

export default Body
