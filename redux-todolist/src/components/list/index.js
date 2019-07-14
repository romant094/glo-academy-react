import React from 'react';
import {connect} from "react-redux";
import ListItem from "../list-item";
import * as actions from '../../actions';

const List = ({items, check}) => {

    const renderItems = (items) => items.map(item => {
        const {label, id, done} = item;

        return (
            <ListItem key={id}
                      label={label}
                      done={done}
                      handleClick={() => check(id - 1)}
            />
        )
    });

    return (
        <div className='mb-3'>
            <ul className='list-group'>
                {renderItems(items)}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({items: state});

export default connect(mapStateToProps, actions)(List);