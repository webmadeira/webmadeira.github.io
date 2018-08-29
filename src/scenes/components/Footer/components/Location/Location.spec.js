import React from 'react'
import { shallow } from 'enzyme'

import Location from './Location'

describe('Location component', () => {
  it('must render properly', () => {
    const location = {
      name: 'test name',
      address: 'test address',
      postCode: 'test post code',
    }

    const component = shallow(<Location location={location} />)

    expect(component).toMatchSnapshot()
  })
})
