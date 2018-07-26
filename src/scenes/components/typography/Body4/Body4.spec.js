import React from 'react'
import { shallow } from 'enzyme'
import Body4 from './Body4'
import theme from '../../../../__mocks__/theme'

describe('Typography - Body4 component', () => {
  it('must render properly', () => {
    const component = shallow(<Body4 theme={theme}>Body 4</Body4>)

    expect(component).toMatchSnapshot()
  })
})
