import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './organisms/Logon';
import Dashboard from './organisms/Dashboard';
import Produtos from './organisms/Produtos';
import ProductCreate from './organisms/ProductCreate';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/produtos" exact component={Produtos} />
                <Route path="/produtos/create" exact component={ProductCreate} />
            </Switch>
        </BrowserRouter>
    );
}