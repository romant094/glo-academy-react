import React from 'react';
import Header from "../header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const App = () => {
    const list = [
        {id: 1, label: 'Tea', important: true},
        {id: 2, label: 'Coffee', important: true},
        {id: 3, label: 'Lemonade', important: false}
    ];
    return (
        <AppBlock>
            <Header/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList list={list}/>
            <PostAddForm/>
        </AppBlock>
    )
};

export default App;