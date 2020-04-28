import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon'
import Dashboard from './pages/Dashboard'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/dashboard"  component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}