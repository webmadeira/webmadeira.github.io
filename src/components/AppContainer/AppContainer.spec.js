import React from 'react'
import { shallow } from 'enzyme'
import AppContainer from './AppContainer'
import theme from '../../__mocks__/theme'

describe('AppContainer component', () => {
  it('must render properly with the "primary" modifier', () => {
    const component = shallow(
      <AppContainer theme={theme}>
        <p>Content</p>
      </AppContainer>,
    )

    expect(component).toMatchSnapshot()
  })

  it('must render properly with the "primary" modifier', () => {
    const component = shallow(
      <AppContainer theme={theme} type="primary">
        <p>Content</p>
      </AppContainer>,
    )

    expect(component).toMatchSnapshot()
  })
})
