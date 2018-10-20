import React from 'react'
import { shallow } from 'enzyme'
import ScheduleEntry from './ScheduleEntry'

describe('ScheduleEntry component', () => {
  const entry = {
    title: 'Title',
    speaker: 'Speaker name',
    description: 'Some description',
    length: 20,
    qaLength: 5,
    time: new Date('2018-08-10 15:20:00').toLocaleTimeString('us-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    }),
  }

  it('must render properly', () => {
    const component = shallow(
      <ScheduleEntry
        entry={entry}
      />,
    )

    expect(component).toMatchSnapshot()
  })
})
