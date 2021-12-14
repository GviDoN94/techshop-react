import React from 'react'
import { useDispatch } from 'react-redux'

import './product-main.scss'

import Button from '../../components/Button'
import { addToCart } from '../../redux/actions/cart'

const Product = ({ name, price, desc, image }) => {
    const dispatch = useDispatch()

    const handleClickAddToCartButton = () => {
        dispatch(addToCart(name, price, desc, image))
    }
    return (
        <div className="content">
            <div className="product-main">
                <img className="product-main__image" src={image} alt={name} />
                <div className="product-main__text-block">
                    <h2 className="product-main__title">{name}</h2>
                    <p className="product-main__desc">
                        <b>О товаре:</b> {desc}
                    </p>
                    <footer className="product-main__footer">
                        <p className="product__price">
                            <b>Цена:</b> {price} ₽
                        </p>
                        <Button
                            className="btn btn--outline btn--big"
                            onClick={handleClickAddToCartButton}
                        >
                            Добавить в корзину
                        </Button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Product
