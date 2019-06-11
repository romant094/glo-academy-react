import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import GotService from "../../service";

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

const NotSelected = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;

export default class CharDetails extends Component {
    gotService = new GotService();

    state = {
        char: null
    };

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char});
            });
        // this.foo.bar = 0;
    };

    render() {
        const {char} = this.state;

        if (!char) {
            return <NotSelected>Please select a character</NotSelected>
        }

        const {born, culture, died, gender, name} = char;

        return (
            <CharDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ListGroup className='list-group-flush'>
                    <Item>
                        <Term>Gender</Term>
                        <span>{gender}</span>
                    </Item>
                    <Item>
                        <Term>Born</Term>
                        <span>{born}</span>
                    </Item>
                    <Item>
                        <Term>Died</Term>
                        <span>{died}</span>
                    </Item>
                    <Item>
                        <Term>Culture</Term>
                        <span>{culture}</span>
                    </Item>
                </ListGroup>
            </CharDetailsBlock>
        );
    }
}