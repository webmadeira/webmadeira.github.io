import { getOrganizationDetails } from './organization'

describe('Event action creators', () => {
  let action
  let expectedKeys

  beforeEach(() => {
    expectedKeys = [
      'social',
    ]
  })

  describe('"getOrganizationDetails" action creator', () => {
    beforeEach(() => {
      action = getOrganizationDetails()
    })

    it('should return an action with the "FETCH_ORGANIZATION" type', () => {
      expect(action.type).toEqual('FETCH_ORGANIZATION')
    })

    it('should return a promise as payload with the organization details', () => {
      action.payload.then((events) => {
        expect(typeof events).toEqual('object')
        expect(Object.keys(events[0])).toContain(...expectedKeys)
      })
    })
  })
})
