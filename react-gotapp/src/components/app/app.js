import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorBoundry from "../Error";
import CharacterPage from "../characterPage";


export default class App extends Component {
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
        if (error){
            return <ErrorBoundry/>
        }
        return (
            <>
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
                            {charVisible ? <RandomChar/> : null}
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        )
    }
}