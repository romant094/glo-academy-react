import React from 'react';
import PostListItem from "../post-list-item";
import './post-list.css';
import ListGroup from "reactstrap/es/ListGroup";

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
        <ListGroup className={'app-list list-group'}>
            {elements}
        </ListGroup>
    )
};

export default PostList;