import React from 'react';
import LoginPage from './LoginPage';
import Artist from './Artist';
import Main from './Main';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/Main" component={Main} />
        <Route path="/Artist/:handle" component={Artist} />
    </Switch>
    </BrowserRouter>
)

export default Routes;