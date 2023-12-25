import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Addresses from './addresses'
import Geofences from './geofences'

const OfflineStores = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/addresses`} />
      <Route path={`${match.url}/addresses`} component={Addresses} />
      <Route path={`${match.url}/geofences`} component={Geofences} />
    </Switch>
  )
}

export default OfflineStores
