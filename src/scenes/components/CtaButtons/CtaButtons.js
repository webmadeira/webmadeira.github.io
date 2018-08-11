import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'

const ButtonsWrapper = styled.div`
  margin-top: 6rem;
  position: absolute;
  width:100%;
  display: flex;
  justify-content: center;
  background-color: transparent;

   > :first-child {
    margin-right: 2.5rem;
  }
`


const emailOrganizer = (message) => {
  window.location = 'mailto:' // eslint-disable-line
  + 'webmadeira.org@gmail.com'
  + `?subject:Web Madeira ${message}`
}

const CtaButtons = () => (
  <ButtonsWrapper>
    <Button message="BECOME A SPONSOR" callback={() => { emailOrganizer('sponsorship') }} />
    <Button message="BECOME A SPEAKER" callback={() => { emailOrganizer('speaker') }} />
  </ButtonsWrapper>
)

export default CtaButtons
