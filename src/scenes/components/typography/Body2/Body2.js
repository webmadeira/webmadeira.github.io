import styled from 'styled-components'

const Body2 = styled.span`
  font-family: ${props => props.theme.fontFamily('primary')};
  font-size: ${props => props.theme.textSetting('md').fontSize};
  line-height: ${props => props.theme.textSetting('md').lineHeight};
`


export default Body2
