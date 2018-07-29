import React from 'react'
import { shallow } from 'enzyme'
import ResponsiveSquare from './ResponsiveSquare'

describe('ResponsiveSquare component', () => {
  it('must render properly', () => {
    const component = shallow(
      (
        <ResponsiveSquare width="100%" minWidth="250px">
          <p>Some arbitrary content</p>
        </ResponsiveSquare>
      ),
    )

    expect(component).toMatchSnapshot()
  })
})
