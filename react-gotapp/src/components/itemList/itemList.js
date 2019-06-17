import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import GotService from "../../services";
import Spinner from "../spinner";
import ErrorBoundry from "../Error";

const Item = styled(ListGroupItem)`
    cursor: pointer;
    
    &:hover{
        background-color: #eee;
        font-weight: bold;
    }
`;

export default class ItemList extends Component {

    gotService = new GotService();
    state = {
        charList: null,
        error: false,
        loading: true
    };

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({charList})
            })
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }


    renderItems = (arr) => {
        return arr.map((item) => (
            <Item key={item.key}
                  onClick={() => this.props.onCharSelected(item.key)}>
                {item.name}
            </Item>
        ))
    };

    render() {
        const {charList, error} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ListGroup>
                {items}
                {error
                    ? <ErrorBoundry/>
                    : null}
            </ListGroup>
        );
    }
}