import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import App from './App/App'
import reducers from './reducers'

const store = createStore(reducers)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root'), // eslint-disable-line
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App/App.js', () => {
    const NextApp = require('./App/App.js').default // eslint-disable-line
    render(NextApp)
  })
}
