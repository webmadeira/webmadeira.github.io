import React from 'react'
import { shallow } from 'enzyme'
import Schedule from './Schedule'

describe('ScheduleEntry component', () => {
  const schedule = [
    { id: 0, title: '' },
    { id: 1, title: '' },
    { id: 2, title: '' },
  ]

  it('must render properly', () => {
    const component = shallow(
      <Schedule
        schedule={schedule}
      />,
    )

    expect(component).toMatchSnapshot()
  })
})
