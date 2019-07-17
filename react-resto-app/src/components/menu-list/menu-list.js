import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";
import WithRestoService from '../hoc';
import * as actions from '../../actions';
import Spinner from "../spinner";
import Error from "../error";

import salads from './images/vegetables.png';
import meat from './images/meat.png';
import pizza from './images/pizza-slice.png';
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        const {
            RestoService,
            menuLoaded,
            menuRequested,
            menuDownloadError
        } = this.props;

        menuRequested();

        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(e => {
                console.log(e);
                menuDownloadError();
            })
    }

    render() {
        const {menuItems, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        return <RenderMenuList items={menuItems}/>
    }
}

const RenderMenuList = ({items}) => {
    const icons = {
        salads,
        meat,
        pizza
    };

    const render = items.map(menuItem => {
        return <MenuListItem key={menuItem.id} menuItem={menuItem} icons={icons}/>
    });

    return (
        <ul className="menu__list">
            {render}
        </ul>
    )
};

const mapStateToProps = (state) => {
    const {menu, loading, error} = state;
    return {
        menuItems: menu,
        loading: loading,
        error: error
    }
};

export default WithRestoService()(connect(mapStateToProps, actions)(MenuList));