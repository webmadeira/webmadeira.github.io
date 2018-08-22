import React from 'react'
import { shallow } from 'enzyme'
import Subtitle2 from './Subtitle2'
import theme from '../../../__mocks__/theme'

describe('Typography - Subtitle2 component', () => {
  it('must render properly', () => {
    const component = shallow(<Subtitle2 theme={theme}>Subtitle2</Subtitle2>)

    expect(component).toMatchSnapshot()
  })
})
