export const selectProduct = (name, price, desc, image) => {
    return {
        type: 'SELECT_PRODUCT',
        payload: {
            name,
            price,
            desc,
            image,
        },
    }
}
