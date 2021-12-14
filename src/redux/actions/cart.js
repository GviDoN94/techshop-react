export const addToCart = (name, price, desc, image) => ({
    type: 'ADD_TO_CART',
    payload: {
        name,
        price,
        desc,
        image,
    },
})

export const removeItemCart = (id) => ({
    type: 'REMOVE_ITEM_CART',
    payload: id,
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})
