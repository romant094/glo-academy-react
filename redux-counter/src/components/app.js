import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './counter';
import {reducer} from '../reducers';

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    )
};

export default App;