import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import * as actions from '../../actions';
import WithRestoService from "../hoc";

const CartTable = ({items, deleteItemFromCart, RestoService, clearCart}) => {
    const cartIsEmpty = items.length === 0;
    console.log(clearCart);
    const makeOrder = (data) => {
        RestoService.sendOrder(data)
            .then(res => {
                console.log(res);
                clearCart();
            })
            .catch(err => console.log(err))
    };

    return (
        <>
            <div className="cart__title">
                {`${cartIsEmpty ? 'Your cart is empty...' : 'Your cart:'}`}
            </div>
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
            {
                cartIsEmpty
                    ? null
                    : (
                        <div className="cart__footer">
                            <button className="menu__btn"
                                    onClick={() => makeOrder(items)}
                            >
                                Make order
                            </button>
                        </div>
                    )
            }
        </>
    );
};

const mapStateToProps = ({items}) => ({items: items});

export default WithRestoService()(connect(mapStateToProps, actions)(CartTable));