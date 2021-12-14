import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CartItem from '../../components/CartItem/CartItem'
import Button from '../../components/Button'

import { clearCart } from '../../redux/actions/cart'

const Cart = ({ cartItems, total }) => {
    const dispatch = useDispatch()

    const handleSubmit = () => {
        const response = window.confirm('Оформить заказ?')
        if (response) {
            dispatch(clearCart())
            alert('Заказ успешно оформлен! Ожидайте доставку.')
        }
    }

    return (
        <div className="content">
            <section className="section section--cart">
                <h2 className="section__title">Корзина</h2>

                {cartItems.length ? (
                    <>
                        <ul className="section__list">
                            {cartItems.map((item, index) => (
                                <CartItem
                                    key={item.name + index}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                />
                            ))}
                        </ul>
                        <div className="section__footer">
                            <p className="total">Итого: {total} ₽</p>
                            <Button
                                className="btn btn--outline btn--big"
                                onClick={handleSubmit}
                            >
                                Оформить заказ
                            </Button>
                        </div>
                    </>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <p>В корзине ничего нет:(<br/> Добавьте товары.</p>
                        <Link to="/">
                            <Button className="btn btn--outline btn--big">
                                На главную
                            </Button>
                        </Link>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Cart
