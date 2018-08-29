import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'

describe('Footer component', () => {
  it('must render properly', () => {
    const pastEvents = [
      {
        id: 0,
        name: 'Test event',
        url: 'http://test.url.com/',
      },
    ]
    const social = [
      { id: 1, name: 'test social', url: '/testSocial' },
    ]
    const location = {
      name: 'test name',
      address: 'test address',
      postCode: 'test post code',
    }
    const component = shallow(<Footer
      pastEvents={pastEvents}
      social={social}
      location={location}
    />)

    expect(component).toMatchSnapshot()
  })
})
