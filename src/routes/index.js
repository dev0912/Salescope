import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Container from '../container'
import ScopePage from '../container/pages/ScopePage'
import CallHistoryPage from '../container/pages/CallHistoryPage'
import SettingsPage from '../container/pages/SettingsPage'
import PresetsContainer from '../container/pages/SettingsPage/PresetsContainer'
import IntegrationsContainer from '../container/pages/SettingsPage/IntegrationsContainer'
import AccountContainer from '../container/pages/SettingsPage/AccountContainer'
import LoginInWithSalseForcePage from '../container/pages/LoginInWithSalseForcePage'

const Routes = () => (
  <BrowserRouter>
    <Container>
      <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/scope" component={ScopePage} />
          <Route path="/login" component={LoginInWithSalseForcePage} />
          <Route path="/call-history" component={CallHistoryPage} />
          <SettingsPage>
            <Route path="/settings/presets" component={PresetsContainer} />
            <Route path="/settings/integrations" component={IntegrationsContainer} />
            <Route path="/settings/account" component={AccountContainer} />
          </SettingsPage>
      </Switch>
    </Container>
   }
  </BrowserRouter>
)

export default Routes
