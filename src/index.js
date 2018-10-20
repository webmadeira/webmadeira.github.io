import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

import reducers from './store/reducers'
import App from './App/App'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore)
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
)

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

if ('serviceWorker' in window.navigator) {
  runtime.register()
}
