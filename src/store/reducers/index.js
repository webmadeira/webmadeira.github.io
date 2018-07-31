import { combineReducers } from 'redux'
import organization from './organization'
import event from './event'

export default combineReducers({
  organization,
  event,
})
