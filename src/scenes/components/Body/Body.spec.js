import React from 'react'
import { shallow } from 'enzyme'
import Body from './Body'

describe('Body component', () => {
  it('must render properly', () => {
    const component = shallow(<Body>Content sample</Body>)

    expect(component).toMatchSnapshot()
  })
})
