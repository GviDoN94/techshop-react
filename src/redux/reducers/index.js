import { combineReducers } from 'redux'

import users from './users'
import products from './products'
import selectProduct from './selectProduct'
import cart from './cart'

const rootReducer = combineReducers({
    users,
    products,
    selectProduct,
    cart,
})

export default rootReducer
