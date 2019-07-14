import React from 'react';
import './list-item.css';

const ListItem = ({label, done, handleClick}) => {
    return (
        <li className={`list-group-item ListGroupItem ${done ? 'checked': ''}`}
            onClick={handleClick}
        >
            {label}
        </li>
    );
};

export default ListItem;