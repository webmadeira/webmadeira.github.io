import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: blue;
`

export default class HelloWorld extends Component {
  greeting = 'world';

  render() {
    return (
      <H1>Hello {this.greeting}!!</H1>
    )
  }
}
