import React from 'react'
import { shallow } from 'enzyme'
import Caption from './Caption'
import theme from '../../../../__mocks__/theme'

describe('Typography - Caption component', () => {
  it('must render properly', () => {
    const component = shallow(<Caption theme={theme}>Caption</Caption>)

    expect(component).toMatchSnapshot()
  })
})
