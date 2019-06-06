import React from 'react';
import styled from 'styled-components';

const SpinWrapper = styled.div`
    @keyframes lds-spin {
        0 % {
            opacity: 1;
            -webkit-transform: scale(1.1, 1.1);
            transform: scale(1.1, 1.1);
        }
            100% {
            opacity: 0;
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
        }
    }
        @-webkit-keyframes lds-spin {
            0 % {
                opacity: 1;
                -webkit-transform: scale(1.1, 1.1);
                transform: scale(1.1, 1.1);
            }
                100% {
                opacity: 0;
                -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
            }
        }
        .lds-spin {
            position: relative;
            margin: 0 auto;
        }
        .lds-spin div > div {
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(10.945283416418347%,14.069989735227272%,25.00646185105847%,0.812);
            -webkit-animation: lds-spin 1.2s linear infinite;
            animation: lds-spin 1.2s linear infinite;
        }
        .lds-spin div:nth-child(1) > div {
            left: 140px;
            top: 80px;
            -webkit-animation-delay: -1.05s;
            animation-delay: -1.05s;
        }
        .lds-spin > div:nth-child(1) {
            -webkit - transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transform-origin: 160px 100px;
            transform-origin: 160px 100px;
        }
        .lds-spin div:nth-child(2) > div {
            left: 122.42640685999999px;
            top: 122.42640685999999px;
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .lds-spin > div:nth-child(2) {
            -webkit - transform: rotate(45deg);
            transform: rotate(45deg);
            -webkit-transform-origin: 142.42640686px 142.42640686px;
            transform-origin: 142.42640686px 142.42640686px;
        }
        .lds-spin div:nth-child(3) > div {
            left: 80px;
            top: 140px;
            -webkit-animation-delay: -0.75s;
            animation-delay: -0.75s;
        }
        .lds-spin > div:nth-child(3) {
            -webkit - transform: rotate(90deg);
            transform: rotate(90deg);
            -webkit-transform-origin: 100px 160px;
            transform-origin: 100px 160px;
        }
        .lds-spin div:nth-child(4) > div {
            left: 37.57359314px;
            top: 122.42640685999999px;
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }
        .lds-spin > div:nth-child(4) {
            -webkit - transform: rotate(135deg);
            transform: rotate(135deg);
            -webkit-transform-origin: 57.57359314px 142.42640686px;
            transform-origin: 57.57359314px 142.42640686px;
        }
        .lds-spin div:nth-child(5) > div {
            left: 20px;
            top: 80px;
            -webkit-animation-delay: -0.45s;
            animation-delay: -0.45s;
        }
        .lds-spin > div:nth-child(5) {
            -webkit - transform: rotate(180deg);
            transform: rotate(180deg);
            -webkit-transform-origin: 40px 100px;
            transform-origin: 40px 100px;
        }
        .lds-spin div:nth-child(6) > div {
            left: 37.57359314px;
            top: 37.57359314px;
            -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
        }
        .lds-spin > div:nth-child(6) {
            -webkit - transform: rotate(225deg);
            transform: rotate(225deg);
            -webkit-transform-origin: 57.57359314px 57.57359314px;
            transform-origin: 57.57359314px 57.57359314px;
        }
        .lds-spin div:nth-child(7) > div {
            left: 80px;
            top: 20px;
            -webkit-animation-delay: -0.15s;
            animation-delay: -0.15s;
        }
        .lds-spin > div:nth-child(7) {
            -webkit - transform: rotate(270deg);
            transform: rotate(270deg);
            -webkit-transform-origin: 100px 40px;
            transform-origin: 100px 40px;
        }
        .lds-spin div:nth-child(8) > div {
            left: 122.42640685999999px;
            top: 37.57359314px;
            -webkit-animation-delay: 0s;
            animation-delay: 0s;
        }
        .lds-spin > div:nth-child(8) {
            -webkit - transform: rotate(315deg);
            transform: rotate(315deg);
            -webkit-transform-origin: 142.42640686px 57.57359314px;
            transform-origin: 142.42640686px 57.57359314px;
        }
        .lds-spin div:nth-child(9) > div {
            left: 140px;
            top: 80px;
            -webkit-animation-delay: 0.15s;
            animation-delay: 0.15s;
        }
        .lds-spin > div:nth-child(9) {
            -webkit - transform: rotate(360deg);
            transform: rotate(360deg);
            -webkit-transform-origin: 160px 100px;
            transform-origin: 160px 100px;
        }
        .lds-spin {
            width: 200px !important;
            height: 200px !important;
            -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
            transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        }
`;


const Spinner = () => {
    return (
        <SpinWrapper>
            <div className="lds-spin">
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </SpinWrapper>
    )
};

export default Spinner;