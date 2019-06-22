import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from "../itemList";
import ItemDetails from '../itemDetails/itemDetails';
import Error from '../Error';

export default class ItemPage extends Component {

    state = {
        selectedItem: null,
        error: false,
        loading: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
            error: false
        })
    };

    componentDidCatch(error, info) {
        this.setState({error: true});
    }

    render() {
        const {error, selectedItem} = this.state;
        const {getItem, getItems} = this.props;

        if (error) {
            return <Error/>
        }

        return (
            <Row className='mb-4'>
                <Col md='6'>
                    <ItemList onItemSelected={this.onItemSelected}
                              getData={getItems}/>
                </Col>
                <Col md='6'>
                    <ItemDetails charId={selectedItem}
                                 getData={getItem}/>
                </Col>
            </Row>
        );
    }
}