import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorBoundry from "../errorBoundry";
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
        if (this.state.error){
            return <ErrorBoundry/>
        }
        return (
            <>
                Hello
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
                            {this.state.charVisible ? <RandomChar/> : null}
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        )
    }
}