import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import Spinner from "../spinner";
import Error from "../Error";
import {Link} from "react-router-dom";

const Item = styled(ListGroupItem)`
    cursor: pointer;
    
    &:hover{
        background-color: #eee;
        font-weight: bold;
    }
`;

const LinkTo = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
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
        const {ownPage, renderItem, onItemSelected} = this.props;
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);
            if (!ownPage) {
                return (
                    <Item key={id}
                          onClick={() => onItemSelected(id)}>
                        {label}
                    </Item>
                )
            } else {
                return(
                    <Item key={id}>
                        <LinkTo to={`books/${id}`}>{label}</LinkTo>
                    </Item>
                )
            }
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