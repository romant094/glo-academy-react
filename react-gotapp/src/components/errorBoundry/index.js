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


const ErrorBoundry = () => {
    return (
        <>
            <ErrorImg src={errorImg} alt="error"/>
            <ErrorText>Something got wrong...</ErrorText>
        </>

    )
};

export default ErrorBoundry;