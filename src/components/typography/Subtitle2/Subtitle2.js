import styled from 'styled-components'

const Subtitle2 = styled.h4`
  font-family: ${props => props.theme.fontFamily('secondary')};
  font-size: ${props => props.theme.textSetting('md').fontSize};
  line-height: ${props => props.theme.textSetting('md').lineHeight};
  font-weight: ${props => props.theme.weight('regular')};
`


export default Subtitle2
