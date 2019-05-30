import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="d-flex bottom-panel">
            <input type="text"
                   placeholder={'О чем вы думаете сейчас?'}
                   className={'form-control new-post-label'}/>
            <button className={'btn btn-primary'} type={'submit'}>Добавить</button>
        </form>
    )
};

export default PostAddForm;