import React from 'react'
import { shallow } from 'enzyme'
import CtaButtons from './CtaButtons'

describe('CtaButtons component', () => {
  it('must render properly', () => {
    const component = shallow(<CtaButtons />)

    expect(component).toMatchSnapshot()
  })
})
