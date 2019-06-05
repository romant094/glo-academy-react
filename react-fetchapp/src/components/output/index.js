import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import Service from '../../service';
import styled from 'styled-components';

const NewJumbotron = styled(Jumbotron)`
    padding: 20px !important;
`;

const Wrapper = styled.div`
    padding: 30px 0;
`;

export default class Output extends Component {
    state = {
        goods: null,
        bestsellers: null,
        coffee: null
    };

    componentDidMount() {
        const service = new Service();

        service.getData()
            .then(res => {
                this.setState({
                    goods: res['goods'],
                    bestsellers: res['bestsellers'],
                    coffee: res['coffee']
                })
            });
    }

    render() {
        const {goods, bestsellers, coffee} = this.state;
        let renderArr;

        if (goods && bestsellers && coffee){
            const products = [...goods, ...bestsellers, ...coffee];
            renderArr = products.map(item => {
                const {name, price, url} = item;
                return (
                    <>
                        <Col xs='12' sm='6' md='3'>
                            <NewJumbotron>
                                <div>{name}</div>
                                <div>{price}</div>
                                <div>
                                    <a href={url}>Link</a>
                                </div>
                            </NewJumbotron>
                        </Col>
                    </>
                )
            });
        }


        return (
            <Wrapper>
                <Container>
                    <Row>
                        {renderArr}
                    </Row>
                </Container>
            </Wrapper>
        )
    }
}