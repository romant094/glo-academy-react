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
    {label: 'Tea', important: true, like: false},
    {label: 'Coffee', important: true, like: false},
    {label: 'Lemonade', important: false, like: false}
];

data.forEach(item => item.id = idGenerator());

export default class App extends Component {
    state = {
        list: data,
        term: '',
        filter: 'all'
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
            important: false,
            like: false
        };

        if (item.label) {
            this.setState(({list}) => {
                const newArr = [...list, item];
                return {list: newArr}
            })
        }
    };

    onTogglePostProp = (id, prop) => {
        this.setState(({list}) => {
            const index = list.findIndex(item => item.id === id);
            const old = list[index];
            const newItem = {...old};
            newItem[prop] = !old[prop];
            const newArr = [...list.slice(0, index), newItem, ...list.slice(index + 1)];
            return {
                list: newArr
            }
        });
    };

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    };

    onUpdateSearch = (term) => {
        this.setState({term})
    };

    filterPosts = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    };

    onFilterSelect = (filter) => {
        this.setState({filter})
    };

    render() {
        const {list, term, filter} = this.state;

        const liked = list.filter(item => item.like).length;
        const allPosts = list.length;

        const visiblePosts = this.filterPosts(this.searchPost(list, term), filter);

        return (
            <AppBlock>
                <Header allPosts={allPosts} liked={liked}/>
                <FilterWrapper>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter={filter}
                                      onFilterSelect={this.onFilterSelect}/>
                </FilterWrapper>
                <PostList
                    list={visiblePosts}
                    onDelete={this.deleteItem}
                    onTogglePostProp={this.onTogglePostProp}/>
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    }
};