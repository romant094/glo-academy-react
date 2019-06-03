import React, {Component} from 'react';
import styled from 'styled-components';
import Input from "reactstrap/es/Input";

const CustomInput = styled(Input)`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

export default class SearchPanel extends Component {
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    };

    render() {
        return <CustomInput type="text"
                            className={'form-control'}
                            placeholder={'Поиск по записям'}
                            onChange={this.onUpdateSearch}/>
    }
};