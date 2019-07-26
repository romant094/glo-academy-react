import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import Spinner from "../spinner";
import Error from "../error";
import * as actions from '../../actions';

import './styles/menu-item-page.scss';

class MenuItemPage extends Component {
    state = {
        menuItem: null,
        error: false,
        count: 1
    };

    componentDidMount() {
        const {id, RestoService} = this.props;
        RestoService.getMenuItem(id)
            .then(res => {
                this.setState({menuItem: res});
            })
            .catch(error => {
                console.log(error);
                this.setState({error: true});
            })
    }

    updateCount = (value) => {
        const {count} = this.state;
        if (count === 1 && value === -1) {
            return;
        }
        this.setState(({count}) => ({count: count + value}));
    };

    render() {
        const {menuItem, error, count} = this.state;
        const {addItemToCart} = this.props;

        if (error) {
            return <Error/>
        }

        if (!menuItem) {
            return <Spinner/>
        } else {
            return <RenderMenuItem menuItem={menuItem}
                                   count={count}
                                   updateCount={this.updateCount}
                                   addItemToCart={addItemToCart}
            />
        }
    }
}

const RenderMenuItem = ({menuItem, count, updateCount, addItemToCart}) => {
    const {title, price, url} = menuItem;

    return (
        <div className='itemPage'>
            <div className='itemPage__item'>
                <div className="container">
                    <div className="itemPage__item-breadcrumbs">
                        <Link to='/menu-items'>Menu</Link> > {title}
                    </div>
                    <div className="itemPage__item-content row">
                        <div className="itemPage__item-content__text col">
                            <div className="title mb-10">
                                <h2 className='mb-10'>{title}</h2>
                                <p className="description mb-10">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quas.
                                </p>
                            </div>

                            <div className="info mb-10">
                                <div className="info__price">
                                    Price: ${price}
                                </div>
                                {/*<div className="info__qty">
                                    <div className="info__qty-add">
                                        <button className='menu__btn menu__btn--small'
                                                onClick={() => {
                                                    updateCount(-1)
                                                }}
                                        >
                                            -
                                        </button>
                                    </div>
                                    <div className="info__qty-count">{count}</div>
                                    <div className="info__qty-remove">
                                        <button className='menu__btn menu__btn--small'
                                                onClick={() => {
                                                    updateCount(1)
                                                }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>*/}
                                <div className="info__order">
                                    <button className="menu__btn"
                                            onClick={() => addItemToCart(menuItem)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="itemPage__item-content__image col">
                            <img src={url} alt={title}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({items}) => ({items: items});

export default WithRestoService()(connect(mapStateToProps, actions)(MenuItemPage));