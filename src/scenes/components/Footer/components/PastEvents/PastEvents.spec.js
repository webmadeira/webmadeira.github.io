import React from 'react'
import { shallow } from 'enzyme'

import PastEvents from './PastEvents'

describe('PastEvents component', () => {
  it('must render properly', () => {
    const pastEvents = [
      {
        id: 0,
        name: 'Test event',
        url: 'http://test.url.com/',
      },
    ]

    const component = shallow(<PastEvents pastEvents={pastEvents} />)

    expect(component).toMatchSnapshot()
  })
})
