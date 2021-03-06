import React from 'react'
import {keys} from 'lodash'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'
import CartProductListItem from './CartProuctListItem'

const CartProductList = ({
    productsInCart,
    productsObj = getProductsMap(productsData),
    CartItem = CartProductListItem,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <div>
            {   
                keys(productsInCart).map((productId)=>{
                    return (
                        <CartItem
                            product = {productsObj[productId]}
                            productCount = {productsInCart[productId]}
                            key = {productId}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    )
                })
            }
        </div>
    )
}

export default CartProductList