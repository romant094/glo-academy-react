import React from 'react';
import PostListItem from "../post-list-item";
import styled from 'styled-components';
import ListGroup from "reactstrap/es/ListGroup";

const CustomListGroup = styled(ListGroup)`
    margin-top: 50px;

    .list-group-item {
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
    }
`;

const PostList = ({list, onDelete}) => {
    const elements = list.map((item) => {
        const {id} = item;
        return (
            <PostListItem {...item} key={id} onDelete={() => onDelete(item.id)}/>
        );
    });
    // const elements = list.map(({id, name, important}) => (
    //     <PostListItem label={label} important={important}/>
    // ));
    return (
        <CustomListGroup>
            {elements}
        </CustomListGroup>
    )
};

export default PostList;