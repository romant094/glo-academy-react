import React from 'react';
import errorImg from './error.png';
import styled from 'styled-components';

const ErrorImg = styled.img`
    width: 100%;
    margin-bottom: 10px;
`;
const ErrorText = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`;


const Error = ({errStatus}) => {
    return (
        <>
            <ErrorImg src={errorImg} alt="error"/>
            <ErrorText>{errStatus ? `Error: ${errStatus.text}. Error code: ${errStatus.id}.` :'Something got wrong...'}</ErrorText>
        </>

    )
};

export default Error;