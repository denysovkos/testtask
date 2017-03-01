import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { AppContainer, HomePageContainer, OrdersContainer, AddNewOrderContainer } from './containers'
import { AboutPage, NotFoundPage } from './components'

export default function createRoutes() {
  return(
    <Route path='/' component={AppContainer}>
      <IndexRoute component={HomePageContainer} />
      <Route path='/about' component={AboutPage} />
       <Route path='/orders' component={OrdersContainer} />
       <Route path='/addOrder' component={AddNewOrderContainer} />
      <Route path='*' component={NotFoundPage} />
    </Route>
  )
}
