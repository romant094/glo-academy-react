import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from "../itemList";
import CharDetails from '../charDetails';
import ErrorBoundry from '../errorBoundry';

export default class CharacterPage extends Component {
    state = {
        selectedChar: 130,
        error: false
    };

    onCharSelected = (id) => {
        this.setState({selectedChar: id})
    };

    componentDidCatch(error, info) {
        this.setState({error: true});
    }

    render() {

        if (this.state.error){
            return <ErrorBoundry/>
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
        );
    }
}