import { getEvents, getEventDetails } from './event'

describe('Event action creators', () => {
  let action
  let expectedKeys

  beforeEach(() => {
    action = getEvents()
    expectedKeys = [
      'id',
      'title',
      'logo',
      'date',
      'description',
      'talks',
    ]
  })

  describe('"getEvents" action creator', () => {
    beforeEach(() => {
      action = getEvents()
    })

    it('should return an action with the "FETCH_EVENTS" type', () => {
      expect(action.type).toEqual('FETCH_EVENTS')
    })

    it('should return a promise as payload with an array of events', () => {
      action.payload.then((events) => {
        expect(typeof events).toEqual('object')
        expect(Object.keys(events[0])).toContain(...expectedKeys)
      })
    })
  })

  describe('"getEventDetails" action creator', () => {
    beforeEach(() => {
      action = getEventDetails()
    })

    it('should return an action with the "FETCH_EVENT_DETAILS" type', () => {
      expect(action.type).toEqual('FETCH_EVENT_DETAILS')
    })

    it('should return a promise as payload with a single event', () => {
      action.payload.then((event) => {
        expect(typeof event).toEqual('object')
        expect(Object.keys(event)).toContain(...expectedKeys)
      })
    })
  })
})
