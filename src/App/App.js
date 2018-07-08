import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import Home from '../scenes/Home'

const App = props => (
  <Provider store={props.store}>
    <Home />
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

/* eslint-disable no-unused-expressions */
injectGlobal`
  html,
  body {
    margin: 0;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
`

export default App
