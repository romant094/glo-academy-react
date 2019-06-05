import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const Item = styled(ListGroupItem)`
    cursor: pointer;
    
    &:hover{
        background-color: #eee;
        font-weight: bold;
    }
`;

export default class ItemList extends Component {

    render() {
        return (
            <ListGroup>
                <Item>
                    John Snow
                </Item>
                <Item>
                    Brandon Stark
                </Item>
                <Item>
                    Geremy
                </Item>
            </ListGroup>
        );
    }
}