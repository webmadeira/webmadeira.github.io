import {
  FETCH_EVENTS_FULFILLED,
  FETCH_EVENT_DETAILS_FULFILLED,
} from '../actions/types'

const INITIAL_STATE = {
  events: [],
  currentEvent: null,
  eventId: 0,
  date: '',
  title: '',
  description: '',
  talks: [],
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

    default:
      return state
  }
}
