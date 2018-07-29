import React from 'react'
import { shallow } from 'enzyme'
import H2 from './H2'
import theme from '../../../__mocks__/theme'

describe('Typography - H2 component', () => {
  it('must render properly', () => {
    const component = shallow(<H2 theme={theme}>H2</H2>)

    expect(component).toMatchSnapshot()
  })
})
