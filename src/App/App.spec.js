import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import App from './App'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('App component', () => {
  it('must render properly', () => {
    const store = mockStore({})
    const component = shallow(<App store={store} />)

    expect(component).toMatchSnapshot()
  })
})
