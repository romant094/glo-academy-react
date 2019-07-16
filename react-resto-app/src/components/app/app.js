import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import {Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    return (
        <Switch>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}}
                 className="app"
            >
                <AppHeader total={50}/>
                <Route path='/' exact render={()=><MainPage/>}/>
                <Route path='/cart' exact render={()=><CartPage/>}/>
            </div>
        </Switch>
    )
};

export default WithRestoService()(App);