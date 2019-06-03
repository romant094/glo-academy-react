import React, {Component} from 'react';
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

export default class PostAddForm extends Component {
    state = {
        text: ''
    };

    onValueChange = (e) => {
        this.setState({text: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''})
    };

    render() {
        return (
            <CustomForm onSubmit={this.onSubmit}>
                <CustomInput type="text"
                             placeholder={'О чем вы думаете сейчас?'}
                             onChange={this.onValueChange}
                             value={this.state.text}/>
                <Button type={'submit'}
                        color={'primary'}>Добавить</Button>
            </CustomForm>
        )
    }
}