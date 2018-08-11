import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import BUTTON from '../typography/BUTTON/BUTTON'

const CustomButton = styled.button`
  border: solid 2px ${props => props.theme.color('secondary', 'bright')};
  color: ${props => props.theme.color('secondary', 'bright')};
  border-radius: 1.3rem;
  padding: 1rem;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
  
  &:focus {
    outline: none;
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
