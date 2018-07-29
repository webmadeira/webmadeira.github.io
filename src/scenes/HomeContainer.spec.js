import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import HomeContainer from './HomeContainer'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('HomeContainer component', () => {
  it('must render properly', () => {
    const store = mockStore({})
    const component = shallow(<HomeContainer store={store} />)

    expect(component).toMatchSnapshot()
  })
})
