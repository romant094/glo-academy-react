import React from 'react';
import styled from 'styled-components';
import Input from "reactstrap/es/Input";

const CustomInput = styled(Input)`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`;

const SearchPanel = () => {
    return <CustomInput type="text"
                  className={'form-control'}
                  placeholder={'Поиск по записям'}/>
};

export default SearchPanel;