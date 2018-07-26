import React from 'react'
import { shallow } from 'enzyme'
import Body1 from './Body1'
import theme from '../../../../__mocks__/theme'

describe('Typography - Body1 component', () => {
  it('must render properly', () => {
    const component = shallow(<Body1 theme={theme}>Body 1</Body1>)

    expect(component).toMatchSnapshot()
  })
})
