import styled from 'styled-components'

const Body3 = styled.p`
  font-family: ${props => props.theme.fontFamily('secondary')};
  font-size: ${props => props.theme.textSetting('nr').fontSize};
  line-height: ${props => props.theme.textSetting('nr').lineHeight};
`


export default Body3
