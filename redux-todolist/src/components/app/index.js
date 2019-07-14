import React, {Component} from 'react';
import './app.css';
import Buttons from "../buttons";
import List from "../list";
import AddItemInput from "../input";
import {connect} from "react-redux";
import * as actions from "../../actions";

class App extends Component {
    state = {
        newValue: '',
        isValid: true,
        filter: false,
        items: this.props.items
    };

    onChange = (value) => {
        this.setState({newValue: value});
    };

    onItemAdd = () => {
        const {add} = this.props;
        const {newValue} = this.state;

        if (newValue.length > 0) {
            add(newValue)
        }
    };

    onToggleFilter = () => {
        const {addFilter, removeFilter, items} = this.props;
        const {filter} = this.state;

        if (filter){
            removeFilter(items);
        } else {
            this.setState({items: items});
            addFilter(!filter);
        }

        this.setState(state => ({filter: !state.filter}));
    };

    render() {
        const {isValid, filter, items} = this.state;
        return (
            <div className='wrapper'>
                <div className='todoContainer'>
                    <List/>
                    <AddItemInput handleChange={(value) => this.onChange(value)}
                                  isValid={isValid}
                    />
                    <Buttons onItemAdd={this.onItemAdd}
                             toggleFilter={this.onToggleFilter}
                             filter={filter}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({items: state});

export default connect(mapStateToProps, actions)(App);