import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductItem from '../components/ProductItem/ProductItem'

import { fetchProducts } from '../redux/actions/products'

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector(({ products }) => products.items)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div className="content">
            <section className="section section--product">
                <h2 className="section__title">Каталог продукции</h2>
                <ul className="section__list">
                    {items &&
                        items.map((product, index) => (
                            <ProductItem
                                key={product.name + index}
                                name={product.name}
                                price={product.price}
                                desc={product.desc}
                                image={product.image}
                            />
                        ))}
                </ul>
            </section>
        </div>
    )
}

export default Home
