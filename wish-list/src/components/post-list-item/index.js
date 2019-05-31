import React, {Component} from 'react';
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
    const [day, month, year] = dateArr;

    return `${day}/${month}/${year}`;
};

export default class PostListItem extends Component {

    state = {
        important: false,
        like: false
    };

    onImportant = () => {
        this.setState(state => ({
            important: !state.important
        }))
    };

    onLike = () => {
        this.setState(state => ({
            like: !state.like
        }))
    };

    render() {
        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span className={'app-list-item-label'}
                      onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <span className={'app-list-item-date'}>{date()}</span>
                    <button
                        type={'button'}
                        className={'btn-star btn-sm'}
                        onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type={'button'}
                        className={'btn-trash btn-sm'}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </li>
        )
    }
}