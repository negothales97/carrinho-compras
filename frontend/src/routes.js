import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './organisms/Logon'
import Dashboard from './organisms/Dashboard'
import Produtos from './organisms/Produtos'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/dashboard"  component={Dashboard} />
                <Route path="/produtos"  component={Produtos} />
            </Switch>
        </BrowserRouter>
    );
}