import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import Error from "../Error";
import ItemPage from "../pages";
import {SingleItemPage} from '../pages';
import GotService from "../../services";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import styled from 'styled-components';

const AppWrapper = styled.div`
    overflow-x: hidden;
    background: url('img/got.jpeg') center center no-repeat;
    background-size: cover;
    font-size: 16px;
    height: 100%;
    min-height: 100vh;
`;

export default class App extends Component {
    gotService = new GotService();

    state = {
        charVisible: true,
        error: false
    };

    charVisibleToggle = () => {
        this.setState((state) => ({
            charVisible: !state.charVisible
        }))
    };

    componentDidCatch(error, info) {
        console.log('error');
        this.setState({error: true});
    }

    render() {
        const {error, charVisible} = this.state;
        if (error) {
            return <Error/>
        }
        return (
            <Router>
                <AppWrapper>
                    <Container>
                        <Header/>
                        <Button color={'primary'}
                                onClick={this.charVisibleToggle}
                                className={'mx-auto mb-3'}>
                            Show / hide char
                        </Button>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {charVisible ? <RandomChar getCharacter={this.gotService.getCharacter}/> : null}
                            </Col>
                        </Row>
                        <Route path='/characters' render={() => (
                            <ItemPage
                                getItems={this.gotService.getAllCharacters}
                                getItem={this.gotService.getCharacter}
                                itemType='character'
                            />
                        )}/>
                        <Route path='/houses' render={() => (
                            <ItemPage
                                getItems={this.gotService.getAllHouses}
                                getItem={this.gotService.getHouse}
                                itemType='house'
                            />
                        )}/>
                        <Route path='/books' exact render={() => (
                            <ItemPage
                                getItems={this.gotService.getAllBooks}
                                getItem={this.gotService.getBook}
                                itemType='book'
                            />
                        )}/>
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                            return <SingleItemPage id={id} getData={this.gotService.getBook}/>
                        }}/>
                    </Container>
                </AppWrapper>
            </Router>
        )
    }
}