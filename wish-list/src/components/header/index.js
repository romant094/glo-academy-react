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

    const declination = (allPosts) => {
        const n = allPosts;
        let result;

        if ((n === 1) || (n > 20 && n % 10 === 1)) result = 'запись';
        else if ((n >= 2 && n <= 4) || (n > 20 && n % 10 >= 2 && n % 10 <= 4)) result = 'записи';
        else result = 'записей';
        return result;
    };
    return (
        <HeaderBlock>
            <h1>Anton Romankov</h1>
            <h2>{allPosts} {declination(allPosts)}, понравилось {liked}</h2>
        </HeaderBlock>
    )
};

export default Header;