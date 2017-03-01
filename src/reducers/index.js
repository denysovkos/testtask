// reducers/index.js

import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import orders from './orders'

const rootReducer = combineReducers({
  routing,
  orders
})

export default rootReducer
