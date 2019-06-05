import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../service';


const App = () => {
    // TODO Delete this check
    console.log((new GotService).getAllCharacters());
    console.log((new GotService).getCharacter(1));
    console.log((new GotService).getAllHouses());
    console.log((new GotService).getHouse(1));
    console.log((new GotService).getAllBooks());
    console.log((new GotService).getBook(1));
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;