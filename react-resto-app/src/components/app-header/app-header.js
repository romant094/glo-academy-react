import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";

const AppHeader = ({total}) => {
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
                Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;