import React from 'react'
import { shallow } from 'enzyme'
import Talks from './Talks'

describe('Talks component', () => {
  it('must render properly', () => {
    const component = shallow(<Talks numTalks={5} />)

    expect(component).toMatchSnapshot()
  })
})
