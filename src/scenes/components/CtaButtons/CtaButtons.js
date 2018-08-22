import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button/Button'

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 50px;

  > :first-child {
    margin-right: 15px;
  }

  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    flex-direction: column;
    align-items: center;
    top: 0px;

    > :first-child {
      margin-right: 0;
      margin-bottom: 15px;
    }
  `};
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
