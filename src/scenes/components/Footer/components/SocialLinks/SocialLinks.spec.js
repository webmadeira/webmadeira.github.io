import React from 'react'
import { shallow } from 'enzyme'

import SocialLinks from './SocialLinks'

describe('SocialLinks component', () => {
  it('must render properly', () => {
    const links = [
      { id: 1, name: 'test social', url: '/testSocial' },
    ]

    const component = shallow(<SocialLinks links={links} />)

    expect(component).toMatchSnapshot()
  })
})
