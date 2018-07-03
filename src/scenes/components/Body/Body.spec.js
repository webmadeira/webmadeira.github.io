import React from 'react'
import { shallow } from 'enzyme'
import Body from './Body'

describe('Body component', () => {
  it('must render properly', () => {
    const component = shallow(<Body />)

    expect(component).toMatchSnapshot()
  })
})
