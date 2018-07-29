import React from 'react'
import { shallow } from 'enzyme'
import Body3 from './Body3'
import theme from '../../../__mocks__/theme'

describe('Typography - Body3 component', () => {
  it('must render properly', () => {
    const component = shallow(<Body3 theme={theme}>Body 3</Body3>)

    expect(component).toMatchSnapshot()
  })
})
