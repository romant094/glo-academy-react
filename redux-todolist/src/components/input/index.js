import React from 'react';

const AddItemInput = ({handleChange, isError}) => {
    const onChange = (e) => {
        let val = e.target.value;
        handleChange(val, e);
    };
    return (
        <div className='form-group'>
            <input className={`form-control ${isError ? 'is-invalid' : ''}`}
                   type="text"
                   placeholder='Enter a new todo item'
                   onChange={onChange}
            />
        </div>
    );
};

export default AddItemInput;