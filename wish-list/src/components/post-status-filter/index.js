import React, {Component} from 'react';
import './post-status-filter.css';
import Button from "reactstrap/es/Button";

export default class PostStatusFilter extends Component {
    state = {
        buttons: [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    };

    render() {
        const {onFilterSelect, filter} = this.props;
        const buttons = this.state.buttons.map(({name, label}) => {
            const active = filter === name;
            const color = active ? 'info' : 'secondary';
            return (
                <Button key={name}
                        outline={!active}
                        color={color}
                        onClick={() => onFilterSelect(name)}>
                    {label}
                </Button>
            )
        });
        return (
            <div className={'btn-group'}>
                {buttons}
            </div>
        )
    }
}