import styled from 'styled-components'

const H3 = styled.h3`
  font-family: ${props => props.theme.fontFamily('primary')};
  font-size: ${props => props.theme.textSetting('lg').fontSize};
  line-height: ${props => props.theme.textSetting('lg').lineHeight};
`


export default H3
