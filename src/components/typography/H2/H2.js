import styled from 'styled-components'

const H2 = styled.h2`
  font-family: ${props => props.theme.fontFamily('secondary')};
  font-size: ${props => props.theme.textSetting('xl').fontSize};
  font-weight: ${props => props.theme.weight('regular')};
  line-height: ${props => props.theme.textSetting('xl').lineHeight};
`


export default H2
