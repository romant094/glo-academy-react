import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import Spinner from "../spinner";
import Error from "../Error";

const ItemDetailsBlock = styled.div`
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

const NotSelected = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }


    updateChar = () => {
        const {charId, getData} = this.props;

        if (!charId) {
            return;
        }

        getData(charId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false
                });
            });
    };

    render() {
        const {item, loading, error} = this.state;

        if (!item) {
            return <NotSelected>Please select {this.props.itemType} from the list</NotSelected>
        }
        if (error) {
            return <Error/>
        }
        if (loading) {
            return <Spinner/>
        }

        const {name} = item;

        const itemDetails = [];

        for (const prop in item) {
            if (prop !== 'id') {
                itemDetails.push((
                    <Item key={prop}>
                        <Term>{prop[0].toUpperCase() + prop.slice(1)}</Term>
                        <span>{item[prop]}</span>
                    </Item>
                ));
            }
        }

        return (
            <ItemDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ListGroup className='list-group-flush'>
                    {itemDetails}
                </ListGroup>
            </ItemDetailsBlock>
        );
    }
}