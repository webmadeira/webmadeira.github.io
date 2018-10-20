import React from 'react'
import { shallow } from 'enzyme'
import Sponsors from './Sponsors'

describe('Sponsors component', () => {
  it('must render properly', () => {
    const sponsors = [
      {
        id: 0,
        name: '',
        logo: '',
        link: '',
      },
    ]

    const component = shallow(<Sponsors sponsors={sponsors} />)

    expect(component).toMatchSnapshot()
  })
})
