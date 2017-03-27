import * as ActionTypes from '../actions'
import {isEqual, without} from 'lodash'

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOAD_ORDERS:
      return {...state, orders: action.orders}
    case ActionTypes.ADD_ORDER:
      return {...state, orders: action.newOrder }
    case ActionTypes.DELETE_ORDER:
      let orders = state.orders
      state.orders = orders.filter(obj => {
        if(isEqual(obj, action.order)) {
          obj = null
        }
        return obj
      })
      return {...state, orders: state.orders}
    default:
      return state
  }
}
