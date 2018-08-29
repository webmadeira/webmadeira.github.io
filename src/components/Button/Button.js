import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import BUTTON from '../typography/BUTTON/BUTTON'

const CustomButton = styled.button`
  border: solid 1px ${props => props.theme.color('secondary', 'bright')};
  color: ${props => props.theme.color('secondary', 'bright')};
  border-radius: 16px;
  padding: 13px 10px 10px;
  background-color: transparent;
  
  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    padding: 10px;
  `};

  &:hover {
    cursor: pointer;
  }
`
const Button = ({ message, callback }) => (
  <CustomButton onClick={callback}>
    <BUTTON>{message}</BUTTON>
  </CustomButton>
)

Button.propTypes = {
  message: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
}

export default Button
