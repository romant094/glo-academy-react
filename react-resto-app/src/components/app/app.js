import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
    RestoService.getResource('/menu')
        .then(items => console.log(items));

    return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}}
                 className="app"
            >
                <AppHeader total={50}/>
                <Switch>
                    <Route path='/' exact render={() => <MainPage/>}/>
                    <Route path='/cart' render={() => <CartPage/>}/>
                </Switch>
            </div>
    )
};

export default WithRestoService()(App);