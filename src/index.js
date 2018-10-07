import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'


import firebase from 'firebase/app'
import 'firebase/messaging'

// import firebase from './firebase'
import reducers from './store/reducers'
import App from './App/App'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore)
const store = createStoreWithMiddleware(reducers)

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

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKUsKisxaHZPSyDmhxpzT7QuMuOyx1j5w",
  authDomain: "webmadeira-ec09c.firebaseapp.com",
  databaseURL: "https://webmadeira-ec09c.firebaseio.com",
  projectId: "webmadeira-ec09c",
  storageBucket: "webmadeira-ec09c.appspot.com",
  messagingSenderId: "237853239803"
};
firebase.initializeApp(config);

const messaging = firebase.messaging()

messaging
  .requestPermission()
  .then(() => {
    messaging.getToken().then((token) => {
      console.log('token:', token)
      return token
    })
  })
  .catch(error => {
    console.error(error)
  })

messaging.onMessage((payload) => {
  debugger;
  console.log('New message:', payload)
})

if ('serviceWorker' in window.navigator) {
  runtime.register().then((registration) => {
    messaging.useServiceWorker(registration)
  })
}
