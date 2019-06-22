import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import GotService from "../../services";
import Spinner from "../spinner";
import Error from "../Error";

const Wrapper = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    min-height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    
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

    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false,
        errStatus: null
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
            .then(res => {
                const {err} = res;
                if (err) {
                    this.setState({
                        errStatus: res,
                        error: true,
                        loading: false
                    })
                } else {
                    this.onCharLoaded(res);
                }
            })
            .catch(this.onError)
    };

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const {char, loading, error, errStatus} = this.state;

        const err = error ? <Error errStatus={errStatus}/> : null;
        const load = loading ? <Spinner/> : null;
        const content = !(error || loading) ? <View char={char}/> : null;
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
        <div>
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
        </div>
    )
};