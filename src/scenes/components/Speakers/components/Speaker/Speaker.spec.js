import React from 'react'
import { shallow } from 'enzyme'
import Speaker from './Speaker'

describe('Speaker component', () => {
  it('must render properly', () => {
    const speaker = {
      id: 0,
      name: 'André Gonçalves',
      company: 'Freelancer',
      jobTitle: 'Web Dev Consultant',
      personalWebsite: 'https://github.com/andregoncalves',
      bwPhoto: 'https://avatars3.githubusercontent.com/u/1074?s=460&v=4',
      photo: 'https://avatars3.githubusercontent.com/u/1074?s=460&v=4',
    }

    const component = shallow(<Speaker speaker={speaker} />)

    expect(component).toMatchSnapshot()
  })
})
