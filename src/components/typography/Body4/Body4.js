import styled from 'styled-components'

const Body4 = styled.span`
  font-family: ${props => props.theme.fontFamily('secondary')};
  font-size: ${props => props.theme.textSetting('sm').fontSize};
  line-height: ${props => props.theme.textSetting('sm').lineHeight};
`


export default Body4
