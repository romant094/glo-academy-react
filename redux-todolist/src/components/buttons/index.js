import React from 'react';

const Buttons = ({onItemAdd, toggleFilter, filter}) => {
    return (
        <div className='d-flex justify-content-between'>
            <button className='btn btn-warning'
                    onClick={toggleFilter}
            >
                {
                    filter
                        ? 'Show all'
                        : 'Hide completed'
                }
            </button>
            <button className='btn btn-primary'
                    onClick={onItemAdd}
            >
                Add new
            </button>
        </div>
    );
};

export default Buttons;