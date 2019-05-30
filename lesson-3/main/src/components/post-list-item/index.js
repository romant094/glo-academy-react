import React from 'react';
import './post-list-item.css';

const date = () => {
    const date = new Date();
    let dateArr = [];
    dateArr.push(date.getDate().toString());
    dateArr.push(date.getMonth().toString());
    dateArr.push(date.getFullYear().toString());

    const formatDate = (x) => {
        return x.length < 2 ? `0${x}` : x;
    };
    dateArr = dateArr.map(item => formatDate(item));
    console.log(dateArr);
    const [day, month, year] = dateArr;

    return `${day}/${month}/${year}`;
};

const PostListItem = () => {
    return (
        <li className={'app-list-item d-flex justify-content-between'}>
            <span className={'app-list-item-label'}>Hello world</span>
            <div className="d-flex justify-content-center align-items-center">
                <span className={'app-list-item-date'}>{date()}</span>
                <button type={'button'} className={'btn-star btn-sm'}>
                    <i className="fa fa-star"></i>
                </button>
                <button type={'button'} className={'btn-trash btn-sm'}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <button type={'button'} className={'btn-heart btn-sm'}>
                    <i className="fa fa-heart-o"></i>
                </button>
            </div>
        </li>
    )
};

export default PostListItem;