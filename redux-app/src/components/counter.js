import React from 'react';
import {connect} from "react-redux";
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <div className="row">
                <button className="btn btn-primary btn-sm mr-2"
                        onClick={dec}
                >
                    Decrease
                </button>
                <button className="btn btn-primary btn-sm mr-2"
                        onClick={inc}
                >
                    Increase
                </button>
                <button className="btn btn-primary btn-sm"
                        onClick={rnd}
                >
                    Random
                </button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

export default connect(mapStateToProps, actions)(Counter);