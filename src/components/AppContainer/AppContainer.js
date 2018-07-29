import styled from 'styled-components'

const AppContainer = styled.section`
  width: 100%;
  background-color: ${props => (
    props.type === 'primary'
      ? props.theme.color()
      : props.theme.color('neutral', 'bright')
  )}

  > * {
    max-width: 1000px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 0 auto;
  }
`


export default AppContainer
