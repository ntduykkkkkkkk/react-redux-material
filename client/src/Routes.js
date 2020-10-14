import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import {
    Dashboard as DashboardView,
    Settings as SettingsView,
    Account as AccountView,
    Users as UsersView,
    SignIn as SignInView,
    SignUp as SignUpView,
    CreateUser as CreateUserView,
} from './views';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <RouteWithLayout component={SettingsView} layout={MainLayout} path="/settings" />
            <RouteWithLayout component={DashboardView} layout={MainLayout} path="/dashboard" />
            <RouteWithLayout component={AccountView} layout={MainLayout} path="/account" />
            <RouteWithLayout component={UsersView} layout={MainLayout} path="/users" />
            <RouteWithLayout component={SignInView} layout={MinimalLayout} path="/sign-in" />
            <RouteWithLayout component={SignUpView} layout={MinimalLayout} path="/sign-up" />
            <RouteWithLayout component={CreateUserView} layout={MainLayout} path="/create-user" />
            <Redirect to="/not-found"/>
        </Switch>
    )
}

export default Routes;
