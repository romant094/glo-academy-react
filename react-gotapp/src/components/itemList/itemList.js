import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import GotService from "../../service";
import Spinner from "../spinner";

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
        charList: null
    };

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({charList})
            })
    }

    renderItems = (arr) => {
        return arr.map((item, i) => (
            <Item key={i}
                  onClick={()=>this.props.onCharSelected(91+i)}>
                {item.name}
            </Item>
        ))
    };

    render() {
        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ListGroup>
                {items}
            </ListGroup>
        );
    }
}