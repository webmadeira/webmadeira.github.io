import styled from 'styled-components'

const Body2 = styled.p`
  font-family: ${props => props.theme.fontFamily('primary')};
  font-size: ${props => props.theme.textSetting('nr').fontSize};
  line-height: ${props => props.theme.textSetting('nr').lineHeight};
  font-weight: ${props => props.theme.weight('light')};
`


export default Body2
