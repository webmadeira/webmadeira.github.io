import styled from 'styled-components'

const Caption = styled.span`
  font-family: ${props => props.theme.fontFamily('primary')};
  font-size: ${props => props.theme.textSetting('xs').fontSize};
  line-height: ${props => props.theme.textSetting('xs').lineHeight};
`

export default Caption
