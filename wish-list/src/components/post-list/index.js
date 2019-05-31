import React from 'react';
import PostListItem from "../post-list-item";
import styled from 'styled-components';
import ListGroup from "reactstrap/es/ListGroup";
import idGenerator from 'react-id-generator';

const CustomListGroup = styled(ListGroup)`
    margin-top: 50px;

    .list-group-item {
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
    }
`;

const PostList = ({list}) => {
    const elements = list.map((item) => {
        const idGen = idGenerator();
        return (
            <PostListItem {...item} key={idGen}/>
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