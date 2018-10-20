import React from 'react'
import { shallow } from 'enzyme'
import EntryContent from './EntryContent'

describe('EntryContent component', () => {
  let title
  let speaker
  let description
  let length
  let qaLength

  beforeEach(() => {
    title = 'Title'
    speaker = 'Speaker name'
    description = 'Some description'
    length = 20
    qaLength = 5
  })

  describe('with time and QA', () => {
    it('must render properly', () => {
      const component = shallow(
        <EntryContent
          title={title}
          speaker={speaker}
          description={description}
          length={length}
          qaLength={qaLength}
        />,
      )

      expect(component).toMatchSnapshot()
    })
  })

  describe('with no QA', () => {
    it('must render properly', () => {
      const component = shallow(
        <EntryContent
          title={title}
          speaker={speaker}
          description={description}
          length={length}
        />,
      )

      expect(component).toMatchSnapshot()
    })
  })

  describe('with no time', () => {
    it('must render properly', () => {
      const component = shallow(
        <EntryContent
          title={title}
          speaker={speaker}
          description={description}
        />,
      )

      expect(component).toMatchSnapshot()
    })
  })
})
