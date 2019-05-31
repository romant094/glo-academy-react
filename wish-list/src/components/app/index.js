import React from 'react';
import Header from "../header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import './app.css';

const App = () => {
    const list = [
        {id: 1, label: 'Tea', important: true},
        {id: 2, label: 'Coffee', important: true},
        {id: 3, label: 'Lemonade', important: false}
    ];
    return (
        <div className={'app'}>
            <Header/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList list={list}/>
            <PostAddForm/>
        </div>
    )
};

export default App;