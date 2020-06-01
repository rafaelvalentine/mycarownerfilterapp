import User from './UserReducer'
import Carowners from './CarOwnersReducers'
import Loading from './pageLoaderReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  User,
  Carowners,
  Loading
})

export default rootReducers