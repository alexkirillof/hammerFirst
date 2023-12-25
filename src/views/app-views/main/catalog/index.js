import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Goods from './goods/Goods'
import Сollections from './collections/Сollections'
import Combo from './combo/Combo'
import Сategories from './categories/Сategories.'

const Catalog = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/goods`} />
      <Route path={`${match.url}/goods`} component={Goods} />
      <Route path={`${match.url}/categories`} component={Сategories} />
      <Route path={`${match.url}/collections`} component={Сollections} />
      <Route path={`${match.url}/combo`} component={Combo} />
    </Switch>
  )
}

export default Catalog
