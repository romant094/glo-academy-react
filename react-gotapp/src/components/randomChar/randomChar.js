import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
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


export default class RandomChar extends Component {

    render() {

        return (
            <Wrapper className="rounded">
                <h4>Random Character: John</h4>
                <ListGroup className="list-group-flush">
                    <Item>
                        <Term>Gender </Term>
                        <span>male</span>
                    </Item>
                    <Item>
                        <Term>Born </Term>
                        <span>11.03.1039</span>
                    </Item>
                    <Item>
                        <Term>Died </Term>
                        <span>13.09.1089</span>
                    </Item>
                    <Item>
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </Item>
                </ListGroup>
            </Wrapper>
        );
    }
}
