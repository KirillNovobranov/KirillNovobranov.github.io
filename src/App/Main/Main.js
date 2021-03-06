import React from 'react'
import {Route} from 'react-router-dom'
import ProductsList from './Products/ProductsList'
import CartPage from './CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'

const Main = ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	changeProductQuantity,
	likeButtonsState,
	addLike,
	removeLike,
}) => {
	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
						<Route exact path="/" render={()=>(
							<ProductsList 
								addProductToCart={addProductToCart}
								likeButtonsState={likeButtonsState}
								addLike={addLike}
								removeLike={removeLike}
							/>
						)}/>
						<Route path="/cart" render={()=>(
							<CartPage 
								productsInCart={productsInCart}
								removeProductFromCart={removeProductFromCart}
								changeProductQuantity={changeProductQuantity}
							/>
						)} />
						<Route path="/payment" component={PaymentPage}/>
						<Route path="/shipping" component={ShippingPage}/>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main