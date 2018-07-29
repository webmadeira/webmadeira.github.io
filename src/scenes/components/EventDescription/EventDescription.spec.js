import React from 'react'
import { shallow } from 'enzyme'
import EventDescription from './EventDescription'

describe('EventDescription component', () => {
  it('must render properly', () => {
    const component = shallow(
      <EventDescription description="Description sample">
        <p>Content</p>
      </EventDescription>,
    )

    expect(component).toMatchSnapshot()
  })
})
