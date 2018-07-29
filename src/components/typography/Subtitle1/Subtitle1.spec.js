import React from 'react'
import { shallow } from 'enzyme'
import Subtitle1 from './Subtitle1'
import theme from '../../../__mocks__/theme'

describe('Typography - Subtitle1 component', () => {
  it('must render properly', () => {
    const component = shallow(<Subtitle1 theme={theme}>Subtitle1</Subtitle1>)

    expect(component).toMatchSnapshot()
  })
})
