import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import './global-styles'
import * as theme from '../theme'
import HomeContainer from '../scenes/HomeContainer'

const App = props => (
  <Provider store={props.store}>
    <ThemeProvider theme={theme}>
      <HomeContainer />
    </ThemeProvider>
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default App
