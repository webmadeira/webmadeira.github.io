import { FETCH_ORGANIZATION_FULFILLED } from '../actions/types'

const INITIAL_STATE = {
  social: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATION_FULFILLED:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
