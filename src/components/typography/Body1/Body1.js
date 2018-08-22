import styled from 'styled-components'

const Body1 = styled.p`
  font-family: ${props => props.theme.fontFamily('primary')};
  font-size: ${props => props.theme.textSetting('nr').fontSize};
  line-height: ${props => props.theme.textSetting('nr').lineHeight};
  font-weight: ${props => props.theme.weight('medium')};
`


export default Body1
