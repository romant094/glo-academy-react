import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import Error from "../Error";
import ItemPage from "../page/itemPage";
import GotService from "../../services";
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
                    <Route path='/books' render={() => (
                        <ItemPage
                            getItems={this.gotService.getAllBooks}
                            getItem={this.gotService.getBook}
                            itemType='book'
                        />
                    )}/>
                </Container>
            </Router>
        )
    }
}