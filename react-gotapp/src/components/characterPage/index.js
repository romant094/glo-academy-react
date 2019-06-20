import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from "../itemList";
import CharDetails from '../charDetails';
import ErrorBoundry from '../Error';
import GotService from "../../services";

export default class CharacterPage extends Component {
    gotService = new GotService();

    state = {
        selectedChar: null,
        error: false,
        loading: false
    };

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id,
            error: false
        })
    };

    componentDidCatch(error, info) {
        this.setState({error: true});
    }

    render() {
        const {error, selectedChar} = this.state;

        if (error) {
            return <ErrorBoundry/>
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}
                              getData={this.gotService.getAllCharacters}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={selectedChar}
                                 getData={this.gotService.getCharacter}/>
                </Col>
            </Row>
        );
    }
}