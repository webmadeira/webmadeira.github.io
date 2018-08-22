import styled from 'styled-components'

const Caption = styled.span`
  font-family: ${props => props.theme.fontFamily('primary')};
  font-size: ${props => props.theme.textSetting('sm').fontSize};
  line-height: ${props => props.theme.textSetting('sm').lineHeight};
  font-weight: ${props => props.theme.weight('regular')};
`

export default Caption
