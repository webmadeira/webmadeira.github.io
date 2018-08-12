import React from 'react'
import { shallow } from 'enzyme'
import Root from './Root'

describe('Home\'s scene Root component', () => {
  it('must render properly', () => {
    const component = shallow(<Root>Content</Root>)

    expect(component).toMatchSnapshot()
  })
})
