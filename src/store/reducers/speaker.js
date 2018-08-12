import { FETCH_SPEAKERS_FULFILLED } from '../actions/types'

const INITIAL_STATE = {
  speakers: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SPEAKERS_FULFILLED:
      return {
        ...state,
        speakers: action.payload.speakers,
      }

    default:
      return state
  }
}
