import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import './global-styles'
import * as theme from '../theme'
import Home from '../scenes/Home'

const App = props => (
  <Provider store={props.store}>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default App
