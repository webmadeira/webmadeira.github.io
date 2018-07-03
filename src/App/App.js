import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Home from '../scenes/Home'

const App = props => (
  <Provider store={props.store}>
    <Home />
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default App
