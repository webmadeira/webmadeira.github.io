import React from 'react'
import { shallow } from 'enzyme'

import Footer from './Footer'

describe('Footer component', () => {
  it('must render properly', () => {
    const pastEvents = [
      {
        id: 0,
        name: 'Test event',
        path: 'http://test.url.com/',
      },
    ]
    const social = [
      { id: 1, name: 'test social', path: '/testSocial' },
    ]
    const component = shallow(<Footer
      pastEvents={pastEvents}
      social={social}
    />)

    expect(component).toMatchSnapshot()
  })
})
