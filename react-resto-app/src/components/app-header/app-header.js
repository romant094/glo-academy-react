import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const AppHeader = ({items}) => {
    let total = 0;
    items.forEach(item => total += item.price * item.count);
    return (
        <header className="header">
            <Link className="header__link"
                  to='/menu-items'
            >
                Menu
            </Link>
            <Link className="header__link"
                  to='/cart'
            >
                <img className="header__cart"
                     src={cartIcon}
                     alt="cart"
                />
                Total: ${total}
            </Link>
        </header>
    )
};

const mapStateToProps = ({items}) => ({items: items});

export default connect(mapStateToProps)(AppHeader);