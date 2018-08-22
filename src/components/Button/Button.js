import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import BUTTON from '../typography/BUTTON/BUTTON'

const CustomButton = styled.button`
  border: solid 1px ${props => props.theme.color('secondary', 'bright')};
  color: ${props => props.theme.color('secondary', 'bright')};
  border-radius: 15px;
  padding: 10px;
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
