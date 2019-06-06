import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import GotService from "../../service";
import Spinner from "../spinner";
import ErrorBoundry from "../errorBoundry";

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
    constructor(props) {
        super(props);
        this.updateChar();
    }


    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    };

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updateChar = () => {
        const id = Math.floor(Math.random() * 140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    };

    render() {
        const {char, loading, error} = this.state;


        const err = error ? <ErrorBoundry/> : null;
        const load = loading ? <Spinner/> : null;
        const content = !(error || loading) ? <View char={char}/> : null;


        // const content = loading
        //     ? <Spinner/>
        //     : error
        //         ? <ErrorBoundry/>
        //         : <View char={char}/>;

        return (
            <Wrapper className="rounded">
                {err}
                {load}
                {content}
            </Wrapper>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ListGroup className="list-group-flush">
                <Item>
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </Item>
                <Item>
                    <Term>Born </Term>
                    <span>{born}</span>
                </Item>
                <Item>
                    <Term>Died </Term>
                    <span>{died}</span>
                </Item>
                <Item>
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </Item>
            </ListGroup>
        </>
    )
};