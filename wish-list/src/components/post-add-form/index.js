import React from 'react';
import {Button, Form, Input} from "reactstrap";
import styled from 'styled-components';

const CustomForm = styled(Form)`
    display:flex;
    margin-top: 20px;
`;
const CustomInput = styled(Input)`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;


const PostAddForm = () => {
    return (
        <CustomForm>
            <CustomInput type="text"
                         placeholder={'О чем вы думаете сейчас?'}/>
            <Button type={'submit'} color={'primary'}>Добавить</Button>
        </CustomForm>
    )
};

export default PostAddForm;