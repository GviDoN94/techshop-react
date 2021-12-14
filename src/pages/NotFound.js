import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
const NotFound = () => {
    return (
        <div className="content">
            <div className="not-found">
                <h1 className="not-found__title">404</h1>

                <p className="not-found__subtitle"> К сожалению страница не найдена :(</p>

                <Link to="/">
                    <Button className="btn btn--outline btn--big">
                        На главную
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
