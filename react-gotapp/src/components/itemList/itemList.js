import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import Spinner from "../spinner";
import Error from "../Error";

const Item = styled(ListGroupItem)`
    cursor: pointer;
    
    &:hover{
        background-color: #eee;
        font-weight: bold;
    }
`;

export default class ItemList extends Component {
    state = {
        itemList: null,
        error: false,
        loading: true
    };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({itemList})
            })
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }


    renderItems = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <Item key={id}
                      onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </Item>
            )
        })
    };

    render() {
        const {itemList, error} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ListGroup>
                {items}
                {
                    error
                        ? <Error/>
                        : null
                }
            </ListGroup>
        );
    }
}