import React, {Component} from 'react';
import Header from "../header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import styled from 'styled-components';
import idGenerator from 'react-id-generator';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const FilterWrapper = styled.div`
    display: flex;
    margin: 1rem 0;
`;

const data = [
    {label: 'Tea', important: true},
    {label: 'Coffee', important: true},
    {label: 'Lemonade', important: false}
];

data.forEach(item => item.id = idGenerator());

export default class App extends Component {
    state = {
        list: data
    };

    deleteItem = (id) => {
        this.setState(({list}) => {
            const index = list.findIndex(elem => elem.id === id);

            const newArr = [...list.slice(0, index), ...list.slice(index + 1)];

            return {list: newArr}
        });
    };

    addItem = (text) => {
        const item = {
            id: idGenerator(),
            label: text,
            important: false
        };

        this.setState(({list}) => {
            const newArr = [...list, item];
            return {list: newArr}
        })
    };

    render() {
        const {list} = this.state;

        return (
            <AppBlock>
                <Header/>
                <FilterWrapper>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </FilterWrapper>
                <PostList
                    list={list}
                    onDelete={this.deleteItem}/>
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    }
};