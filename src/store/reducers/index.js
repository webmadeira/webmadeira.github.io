import { combineReducers } from 'redux'
import organization from './organization'
import event from './event'
import speaker from './speaker'

export default combineReducers({
  organization,
  event,
  speaker,
})
