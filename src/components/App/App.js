import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import HelloWorld from '../HelloWorld/HelloWorld'

const App = props => (
  <Provider store={props.store}>
    <HelloWorld />
  </Provider>
)

App.propTypes = {
  store: PropTypes.shape().isRequired,
}

export default App
