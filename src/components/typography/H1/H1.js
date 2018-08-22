import styled from 'styled-components'

const H1 = styled.h1`
  font-family: ${props => props.theme.fontFamily('secondary')};
  font-size: ${props => props.theme.textSetting('xxxl').fontSize};
  line-height: ${props => props.theme.textSetting('xxxl').lineHeight};
  font-weight: ${props => props.theme.weight('regular')};
`

export default H1
