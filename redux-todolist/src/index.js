import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import './assets/css/bootstrap.min.css';
import {createStore} from "redux";
import {reducer} from "./reducers";
import {Provider} from "react-redux";

const store = createStore(reducer);

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
};

ReactDOM.render(<ReduxApp/>, document.getElementById('root'));
