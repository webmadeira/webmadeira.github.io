import {
  FETCH_EVENTS_FULFILLED,
  FETCH_EVENT_DETAILS_FULFILLED,
  FETCH_PAST_EVENTS_FULFILLED,
} from '../actions/types'

const INITIAL_STATE = {
  events: [],
  currentEvent: null,
  eventId: 0,
  date: '',
  title: '',
  logo: '',
  description: '',
  registrationLink: '',
  thankYouText: '',
  schedule: [],
  sponsors: [],
  pastEvents: [],
  location: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EVENTS_FULFILLED:
      return {
        ...state,
        events: [
          ...state.events,
          ...action.payload,
        ],
      }

    case FETCH_EVENT_DETAILS_FULFILLED:
      return {
        ...state,
        ...action.payload,
      }

    case FETCH_PAST_EVENTS_FULFILLED:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
