import { getSpeakers } from './speaker'

describe('Speaker action creators', () => {
  let action
  let expectedKeys

  beforeEach(() => {
    expectedKeys = [
      'id',
      'name',
      'company',
      'jobTitle',
      'personalWebsite',
      'bwPhoto',
      'photo',
    ]
  })

  describe('"getOrganizationDetails" action creator', () => {
    beforeEach(() => {
      action = getSpeakers()
    })

    it('should return an action with the "FETCH_SPEAKERS" type', () => {
      expect(action.type).toEqual('FETCH_SPEAKERS')
    })

    it('should return a promise as payload with an array of speakers', () => {
      action.payload.then((speakers) => {
        expect(typeof speakers).toEqual('object')
        expect(Object.keys(speakers[0])).toContain(...expectedKeys)
      })
    })
  })
})
