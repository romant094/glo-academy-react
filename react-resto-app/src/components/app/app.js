import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {MainPage, CartPage, MenuItemPage} from '../pages';
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
            <AppHeader/>
            <Switch>
                <Route path='/menu-items' exact render={() => <MainPage/>}/>
                <Route path='/menu-items/:id' render={({match}) => {
                    const {id} = match.params;
                    return <MenuItemPage id={id}/>;
                }}/>
                <Route path='/cart' render={() => <CartPage/>}/>
                <Redirect from='/' to='/menu-items'/>
            </Switch>
        </div>
    )
};

export default App;