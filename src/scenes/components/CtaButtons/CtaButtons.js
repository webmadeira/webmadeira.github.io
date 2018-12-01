import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../../../components/Button/Button'

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 25px;

  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    flex-direction: column;
    align-items: center;
  `};
`

const CtaButtons = ({ registrationLink }) => (
  <ButtonsWrapper>
    <a href={registrationLink} target="_blank" rel="noopener noreferrer">
      <Button message="Registration" callback={() => {}} />
    </a>
  </ButtonsWrapper>
)

CtaButtons.propTypes = {
  registrationLink: PropTypes.string.isRequired,
}

export default CtaButtons
