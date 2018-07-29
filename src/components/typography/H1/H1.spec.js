import React from 'react'
import { shallow } from 'enzyme'
import H1 from './H1'
import theme from '../../../__mocks__/theme'

describe('Typography - H1 component', () => {
  it('must render properly', () => {
    const component = shallow(<H1 theme={theme}>H1</H1>)

    expect(component).toMatchSnapshot()
  })
})
