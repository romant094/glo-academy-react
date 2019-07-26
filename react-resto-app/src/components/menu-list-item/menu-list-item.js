import React from 'react';
import {Link} from "react-router-dom";
import './menu-list-item.scss';

const MenuListItem = ({menuItem, icons, onItemAdd}) => {
    const {title, price, url, category, id} = menuItem;
    const icon = icons[category];

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img"
                 src={url}
                 alt={title}/>
            <div className="menu__category">
                <span className="menu__category-left">
                    Category: <span>{category}</span>
                </span>
                <span className='menu__category-right'>
                    <img src={icon} alt={category}/>
                </span>
            </div>
            <div className="menu__price">Price: <span>${price}</span></div>
            <div className='menu__item-footer'>
                <button className="menu__btn"
                        onClick={onItemAdd}
                >
                    Add to cart
                </button>
                <Link to={`/menu-items/${id}`}>More</Link>
            </div>
        </li>
    )
};

export default MenuListItem;