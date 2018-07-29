import React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/img/digital-mountain.svg'

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const WMLogo = () => (
  <Img src={logo} alt="Webmadeira logo" />
)

export default WMLogo
