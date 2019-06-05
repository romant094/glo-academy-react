import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const CharDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const Item = styled(ListGroupItem)`
    display: flex !important;
    justify-content: space-between;
`;

const Term = styled.span`
    font-weight: bold;
`;

/*.select-error {
    color: #fff;
    text-align: center;
    font-size: 26px;
}*/

export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsBlock className="rounded">
                <h4>John Snow</h4>
                <ListGroup className='list-group-flush'>
                    <Item>
                        <Term>Gender</Term>
                        <span>male</span>
                    </Item>
                    <Item>
                        <Term>Born</Term>
                        <span>1783</span>
                    </Item>
                    <Item>
                        <Term>Died</Term>
                        <span>1820</span>
                    </Item>
                    <Item>
                        <Term>Culture</Term>
                        <span>First</span>
                    </Item>
                </ListGroup>
            </CharDetailsBlock>
        );
    }
}