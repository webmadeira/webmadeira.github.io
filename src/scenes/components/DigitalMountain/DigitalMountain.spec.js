import React from 'react'
import { shallow } from 'enzyme'
import DigitalMountain from './DigitalMountain'

describe('DigitalMountain component', () => {
  it('must render properly', () => {
    const component = shallow(<DigitalMountain />)

    expect(component).toMatchSnapshot()
  })
})
