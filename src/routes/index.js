import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from '../container'
import ScopePage from '../container/pages/ScopePage'
import CallHistoryPage from '../container/pages/CallHistoryPage'
import SettingsPage from '../container/pages/SettingsPage'
import PresetsContainer from '../container/pages/SettingsPage/PresetsContainer'
import IntegrationsContainer from '../container/pages/SettingsPage/IntegrationsContainer'
import AccountContainer from '../container/pages/SettingsPage/AccountContainer'

const Routes = () => (
    <BrowserRouter>
        <Container>
            <Switch>
                <Route exact path="/" component={ScopePage} />
                <Route path="/call-history" component={CallHistoryPage} />
                <SettingsPage>
                    <Route path="/settings/presets" component={PresetsContainer} />
                    <Route path="/settings/integrations" component={IntegrationsContainer} />
                    <Route  path="/settings/account" component={AccountContainer} />
                </SettingsPage>
            </Switch>
        </Container>
    </BrowserRouter>
)

export default Routes