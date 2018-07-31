import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import HomeContainer from './HomeContainer'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('HomeContainer component', () => {
  it('must render properly', () => {
    const store = mockStore({
      event: {
        title: 'Test title',
        date: 'Test date',
        description: 'Test description',
        talks: [
          { id: 0, description: 'Test talk 1' },
          { id: 1, description: 'Test talk 2' },
        ],
      },
      organization: {
        logo: 'logo path',
      },
    })
    const component = shallow(<HomeContainer store={store} />)

    expect(component).toMatchSnapshot()
  })

  it('must render properly with date', () => {
    const store = mockStore({
      event: {
        title: 'Test title',
        date: new Date('2018-08-10'),
        description: 'Test description',
        talks: [
          { id: 0, description: 'Test talk 1' },
          { id: 1, description: 'Test talk 2' },
        ],
      },
      organization: {
        logo: 'logo path',
      },
    })
    const component = shallow(<HomeContainer store={store} />)

    expect(component).toMatchSnapshot()
  })
})
