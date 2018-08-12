import React from 'react'
import { shallow } from 'enzyme'
import Speakers from './Speakers'

describe('Speakers component', () => {
  it('must render properly', () => {
    const speakers = [
      {
        id: 0,
        name: 'André Gonçalves',
        company: 'Freelancer',
        jobTitle: 'Web Dev Consultant',
        personalWebsite: 'https://github.com/andregoncalves',
        bwPhoto: 'https://avatars3.githubusercontent.com/u/1074?s=460&v=4',
        photo: 'https://avatars3.githubusercontent.com/u/1074?s=460&v=4',
      },
      {
        id: 1,
        name: 'Aurélio Pita',
        company: 'Blip',
        jobTitle: 'Front End Developer',
        jobWebsite: 'https://blip.pt/',
        personalWebsite: 'https://github.com/jaapaurelio',
        bwPhoto: 'https://avatars3.githubusercontent.com/u/2837728?s=460&v=4',
        photo: 'https://avatars3.githubusercontent.com/u/2837728?s=460&v=4',
      },
    ]

    const component = shallow(<Speakers speakers={speakers} />)

    expect(component).toMatchSnapshot()
  })
})
