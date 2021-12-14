import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import './cart-item.scss'
import { removeItemCart } from '../../redux/actions/cart'

const CartItem = ({ id, name, price, image }) => {
    const dispatch = useDispatch()

    const handleDeleteItem = () => {
        dispatch(removeItemCart(id))
    }

    return (
        <li className="cart-item">
            <div className="cart-item__content">
                <img className="cart-item__image" src={image} alt="name" />

                <p className="cart-item__name">{name}</p>
            </div>

            <div className="cart-item__right-side">
                <span className="cart-item__price">{price} ₽</span>
                <Button className="btn btn--delete" onClick={handleDeleteItem}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            className="delete-path"
                            stroke="#b6b6b6"
                            d="M 11.6666,9.16667 V 14.1667 M 8.33337,9.16667 V 14.1667 M 6.66663,5.00001 V 3.33334 c 0,-0.44203 0.17559,-0.86595 0.48815,-1.17851 C 7.46734,1.84227 7.89127,1.66667 8.33329,1.66667 h 3.33331 c 0.4421,0 0.866,0.1756 1.1785,0.48816 0.3126,0.31256 0.4882,0.73648 0.4882,1.17851 v 1.66667 m 2.5,0 V 16.6667 c 0,0.442 -0.1756,0.8659 -0.4882,1.1785 -0.3125,0.3125 -0.7364,0.4881 -1.1785,0.4881 H 5.83329 c -0.44202,0 -0.86595,-0.1756 -1.17851,-0.4881 C 4.34222,17.5326 4.16663,17.1087 4.16663,16.6667 V 5.00001 Z M 2.5,5 H 4.16667 17.5"
                        ></path>
                    </svg>
                </Button>
            </div>
        </li>
    )
}

export default CartItem
