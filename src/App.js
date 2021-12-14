import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/Header/Header'

import { Home, Login, SignUp, Rules, NotFound, Product, Cart } from './pages'

import { addUser, loginRequest, logout } from './redux/actions/users'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import './scss/style.scss'

function App() {
    const dispatch = useDispatch()

    const loggedUser = useSelector(({ users }) => users.loggedUser)
    const { id, name, price, desc, image } = useSelector(
        ({ selectProduct }) => selectProduct.product,
    )
    const cartItems = useSelector(({ cart }) => cart.items)

    const total = useSelector(({ cart }) => cart.total)

    const navigate = useNavigate()

    const handleRegistration = (email, password) => {
        dispatch(addUser(email, password))
    }

    const handleLogin = (email, password) => {
        dispatch(loginRequest(email, password))
            .then((result) => navigate('/'))
            .catch((err) => alert(err))
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="App">
            <div className="container">
                <Header
                    user={loggedUser}
                    onLogout={handleLogout}
                    cartCounter={cartItems.length}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute user={loggedUser}>
                                <Home />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute user={loggedUser}>
                                <Cart cartItems={cartItems} total={total} />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route
                        path="/product"
                        element={
                            <ProtectedRoute user={loggedUser}>
                                <Product
                                    id={id}
                                    name={name}
                                    price={price}
                                    desc={desc}
                                    image={image}
                                />
                            </ProtectedRoute>
                        }
                    ></Route>

                    <Route
                        path="/login"
                        element={
                            <Login user={loggedUser} onLogin={handleLogin} />
                        }
                    />
                    <Route
                        path="/signUp"
                        element={
                            <SignUp
                                user={loggedUser}
                                onRegister={handleRegistration}
                            />
                        }
                    />

                    <Route path="/rules" element={<Rules />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
