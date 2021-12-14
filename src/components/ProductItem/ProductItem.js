import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Button from '../Button'

import { selectProduct } from '../../redux/actions/selectProduct'
import { addToCart } from '../../redux/actions/cart'

import './product-item.scss'

const ProductItem = ({ name, price, desc, image }) => {
    const dispatch = useDispatch()

    const handleClickAddProduct = () => {
        dispatch(addToCart(name, price, desc, image))
    }
    return (
        <li
            className="product-item"
            onClick={() => dispatch(selectProduct(name, price, desc, image))}
        >
            <Link to="/product" name={name} price={price}>
                <img className="product-item__image" src={image} alt={name} />
                <h3 className="product-item__title">{name}</h3>
            </Link>
            <footer className="product-item__footer">
                <div className="product-item__price">{price} ₽</div>
                <Button
                    className="btn btn--outline"
                    onClick={handleClickAddProduct}
                >
                    В корзину
                </Button>
            </footer>
        </li>
    )
}

export default ProductItem
