import React from 'react';
import LoginPage from './LoginPage';
import Artist from './Artist';
import Main from './Main';
import { Switch, Route } from 'react-router-dom';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/Main" component={Main} />
        <Route path="/Artist" component={Artist} />
    </Switch>
)

export default Routes;