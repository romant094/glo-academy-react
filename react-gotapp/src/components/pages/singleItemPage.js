import React, {Component} from 'react';
import {ItemDetailsBlock} from '../styledComponents';
import {ListGroup} from "reactstrap";
import Spinner from "../spinner";

export default class SingleItemPage extends Component {

    state = {
        item: null,
    };

    componentDidMount() {
        const {getData, id} = this.props;
        getData(id)
            .then((item) => {
                this.setState({
                    item
                });
            });
    }

    render() {
        const {item} = this.state;
        if (!item){
            return <Spinner/>
        }

        const itemDetails = [];

        for (const prop in item) {
            if (prop !== 'id') {
                itemDetails.push((
                    <li key={prop} className='d-flex justify-content-between list-group-item'>
                        <span className='font-weight-bold'>{prop[0].toUpperCase() + prop.slice(1)}</span>
                        <span>{item[prop]}</span>
                    </li>
                ));
            }
        }
        return (
            <ItemDetailsBlock className="rounded">
                <h4>Book </h4>
                <ListGroup className='list-group-flush'>
                    {itemDetails}
                </ListGroup>
            </ItemDetailsBlock>
        );
    }
};