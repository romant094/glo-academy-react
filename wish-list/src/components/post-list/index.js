import React from 'react';
import PostListItem from "../post-list-item";
import './post-list.css';

const PostList = ({list}) => {
    const elements = list.map((item) => {
        const {id} = item;
        return (
            <PostListItem {...item} key={id}/>
        );
    });
    // const elements = list.map(({id, name, important}) => (
    //     <PostListItem label={label} important={important}/>
    // ));
    return (
        <ul className={'app-list list-group'}>
            {elements}
        </ul>
    )
};

export default PostList;