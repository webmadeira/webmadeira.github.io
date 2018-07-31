import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header component', () => {
  it('must render properly', () => {
    const component = shallow(<Header
      title="Web Madeira"
      date="29 Dec"
      logo="logo path"
    />)

    expect(component).toMatchSnapshot()
  })
})
