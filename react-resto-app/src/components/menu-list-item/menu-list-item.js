import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, icons}) => {
    const {title, price, url, category} = menuItem;
    const icon = icons[category];
    console.log(icon);

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
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    )
};

export default MenuListItem;