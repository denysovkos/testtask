import fetch from 'isomorphic-fetch'
import request from 'superagent'
import Router from 'react-router'

export const LOAD_ORDERS = 'LOAD_ORDERS'
export const ADD_ORDER = 'ADD_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'

export const loadOrders = () => (dispatch) => {
  fetch('/order')
        .then(response => response.json())
        .then(orders => {
          return dispatch({
            type: LOAD_ORDERS,
            orders
          })
        } )
        .catch(e => console.warn(e))
}

export const addOrder = (form) => (dispatch) => {

  return new Promise((resolve, reject) => {
    request
            .post('/order')
            .send(form)
            .set('Accept', 'application/json')
            .end((err, res) => {
              if (err || !res.ok) {
                reject(err)
              } else {
                dispatch({
                  type: ADD_ORDER,
                  newOrder: res.body
                })
                dispatch(loadOrders())
              }
            })
  })
}

export const deleteOrder = (id) => (dispatch) => {

  console.log('I AM CALL DELETE ACTIONSSSS')

  fetch(`/order/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(order => {
          return dispatch({
            type: DELETE_ORDER,
            order
          })
        } )
        .catch(e => console.warn(e))
}