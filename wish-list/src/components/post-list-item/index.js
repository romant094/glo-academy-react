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

    input = React.createRef();

    state = {
        label: this.props.label,
        important: false,
        like: false,
        editable: false
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

    editToggle = () => {
        this.input.current.value = this.state.label;
        this.setState(state => ({
            editable: !state.editable
        }))
    };

    onSave = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            label: this.input.current.value,
            editable: !state.editable
        }))
    };

    render() {
        const {important, like, label, editable} = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span className={`${editable ? 'd-none' : ''} app-list-item-label`}
                      onClick={this.onLike}>
                    {label}
                </span>
                <form className={`${editable ? 'd-flex' : 'd-none'} align-items-center`}
                      onSubmit={this.onSave}>
                    <input type="text" className={'app-list-item-edit'} ref={this.input}/>
                    <button type={'submit'} className={'btn btn-icon'}>
                        <i className="fa fa-check text-success"></i>
                    </button>
                    <button type={'button'} className={'btn btn-icon'} onClick={this.editToggle}>
                        <i className="fa fa-ban text-danger"></i>
                    </button>
                </form>
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
                    <button
                        type={'button'}
                        className={'btn-edit btn-sm'}
                        onClick={this.editToggle}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </li>
        )
    }
}