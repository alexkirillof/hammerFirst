import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loading from '../../../components/shared-components/Loading'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'

const Main = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route
          path={`${match.url}/dashboards`}
          component={lazy(() => import(`./dashboards`))}
        />
        <Route
          path={`${match.url}/catalog`}
          component={lazy(() => import(`./catalog`))}
        />
        <Route
          path={`${match.url}/orders`}
          component={lazy(() => import(`./orders`))}
        />
        <Route
          path={`${match.url}/clients`}
          component={lazy(() => import(`./clients`))}
        />
        <Route
          path={`${match.url}/banners`}
          component={lazy(() => import(`./banners`))}
        />
        <Route
          path={`${match.url}/promoCodes`}
          component={lazy(() => import(`./promoCodes`))}
        />
        <Route
          path={`${match.url}/offlineStores`}
          component={lazy(() => import(`./offlineStores`))}
        />
        <Route
          path={`${match.url}/employees`}
          component={lazy(() => import(`./employees`))}
        />
        <Route
          path={`${match.url}/promoCodes`}
          component={lazy(() => import(`./promoCodes`))}
        />
        <Route
          path={`${match.url}/mailings`}
          component={lazy(() => import(`./mailings`))}
        />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/main`} />
      </Switch>
    </Suspense>
  )
}

export default Main
