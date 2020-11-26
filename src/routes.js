import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home/index';
import Profile from './pages/profile/index'


function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" exact component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;