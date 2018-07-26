import React from 'react'
import { shallow } from 'enzyme'
import H3 from './H3'
import theme from '../../../../__mocks__/theme'

describe('Typography - H3 component', () => {
  it('must render properly', () => {
    const component = shallow(<H3 theme={theme}>H3</H3>)

    expect(component).toMatchSnapshot()
  })
})
