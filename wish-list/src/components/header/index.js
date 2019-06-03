import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1{
      font-size: 26px;
      color: ${props => props.colored ? 'red' : 'black'}
      &:hover{
        color: blue;
      }
    }
    h2{
      font-size: 1.2rem;
      color: grey;
    }
`;

const Header = ({liked, allPosts}) => {
    return (
        <HeaderBlock>
            <h1>Anton Romankov</h1>
            <h2>{allPosts} записей, понравилось {liked}</h2>
        </HeaderBlock>
    )
};

export default Header;