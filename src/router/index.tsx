import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from './Route';
import { Home } from '../components/pages';

/**
 * Application routes definition.
 */
export const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact component={Home} path="/" />
        </Switch>
    </BrowserRouter>
);