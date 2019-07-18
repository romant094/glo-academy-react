import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

const style = {
    background: `url(${Background}) center center/cover no-repeat`,
    minHeight: '100vh',
    height: '100%'
};

const App = () => {

    return (
        <div style={style}
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

export default App;