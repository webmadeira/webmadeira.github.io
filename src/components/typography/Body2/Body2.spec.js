import React from 'react'
import { shallow } from 'enzyme'
import Body2 from './Body2'
import theme from '../../../__mocks__/theme'

describe('Typography - Body2 component', () => {
  it('must render properly', () => {
    const component = shallow(<Body2 theme={theme}>Body 2</Body2>)

    expect(component).toMatchSnapshot()
  })
})
