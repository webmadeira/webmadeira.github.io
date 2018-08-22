import styled from 'styled-components'

const H2 = styled.h2`
  font-family: ${props => props.theme.fontFamily('secondary')};
  font-size: ${props => props.theme.textSetting('xxl').fontSize};
  line-height: ${props => props.theme.textSetting('xxl').lineHeight};
  font-weight: ${props => props.theme.weight('regular')};
`


export default H2
