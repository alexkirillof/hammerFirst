import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ClientsGroups from './clientsGroups/ClientsGroups'
import ClientsList from './clientsList'
import ClientProfile from './clientsList/ClientProfile'

const Clients = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/clientsList`} />
      <Route path={`${match.url}/clientsList`} component={ClientsList} />
      <Route path={`${match.url}/:clientId`} component={ClientProfile} />
      <Route path={`${match.url}/clientsGroups`} component={ClientsGroups} />
    </Switch>
  )
}

export default Clients
