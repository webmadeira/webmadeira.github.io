import React from 'react'
import { shallow } from 'enzyme'
import BUTTON from './BUTTON'
import theme from '../../../../__mocks__/theme'

describe('Typography - BUTTON component', () => {
  it('must render properly', () => {
    const component = shallow(<BUTTON theme={theme}>Button</BUTTON>)

    expect(component).toMatchSnapshot()
  })
})
