import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer component', () => {
  it('must render properly', () => {
    const component = shallow(<Footer />)

    expect(component).toMatchSnapshot()
  })
})
