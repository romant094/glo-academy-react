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

    onItemAdd = item => {
        const {addItemToCart} = this.props;
        addItemToCart(item);
    };

    render() {
        const {menuItems, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        return <RenderMenuList items={menuItems}
                               onItemAdd={this.onItemAdd}
        />
    }
}

const RenderMenuList = ({items, onItemAdd}) => {
    const icons = {
        salads,
        meat,
        pizza
    };

    const render = items.map(menuItem => {
        const {id} = menuItem;
        return <MenuListItem key={id}
                             menuItem={menuItem}
                             icons={icons}
                             onItemAdd={() => onItemAdd(menuItem)}
        />
    });

    return (
        <ul className="menu__list">
            {render}
        </ul>
    )
};

const mapStateToProps = (state) => {
    const {menu, loading, error, items} = state;
    return {
        menuItems: menu,
        loading: loading,
        error: error,
        items: items
    }
};

export default WithRestoService()(connect(mapStateToProps, actions)(MenuList));