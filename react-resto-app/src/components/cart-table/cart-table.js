import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import * as actions from '../../actions';

const CartTable = ({items, deleteItemFromCart}) => {
    console.log(items);
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {id, url, price, title, count} = item;
                        return (
                            <div key={id}
                                 className="cart__item"
                            >
                                <img src={url}
                                     className="cart__item-img"
                                     alt={title}
                                />
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">${price}</div>
                                <div className="cart__item-qty">{`${count}pc${count > 1 ? 's' : ''}`}</div>
                                <div className="cart__close"
                                     onClick={() => deleteItemFromCart(id)}
                                >
                                    &times;
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => ({items: items});

export default connect(mapStateToProps, actions)(CartTable);