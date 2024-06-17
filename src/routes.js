import React from 'react';
import Home from './pages/Home';
import Users from './pages/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Routes(){

    return(
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={Users} />
        </Switch>
    </Router>
)}