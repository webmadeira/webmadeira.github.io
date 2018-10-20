import React from 'react'
import { shallow } from 'enzyme'
import ThankYou from './ThankYou'

describe('ThankYou component', () => {
  it('must render properly', () => {
    const thankYouText = ''
    const sponsors = [
      {
        id: 0,
        name: '',
        logo: '',
        link: '',
      },
    ]

    const component = shallow(<ThankYou sponsors={sponsors} thankYouText={thankYouText} />)

    expect(component).toMatchSnapshot()
  })
})
