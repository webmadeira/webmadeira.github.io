import styled from 'styled-components'

const BUTTON = styled.span`
  font-family: ${props => props.theme.fontFamily('secondary')};
  font-size: ${props => props.theme.textSetting('nr').fontSize};
  line-height: ${props => props.theme.textSetting('nr').lineHeight};
  font-weight: ${props => props.theme.weight('regular')};
  text-transform: uppercase;
`

export default BUTTON
