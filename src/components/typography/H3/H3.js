import styled from 'styled-components'

const Subtitle1 = styled.h3`
  font-family: ${props => props.theme.fontFamily('secondary')};
  font-size: ${props => props.theme.textSetting('xl').fontSize};
  line-height: ${props => props.theme.textSetting('xl').lineHeight};
  font-weight: ${props => props.theme.weight('regular')};
`


export default Subtitle1
