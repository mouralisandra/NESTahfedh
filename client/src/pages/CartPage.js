import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import {Context} from "../index";
import {changeCartFinalPrice, getAllFromCartByUserId} from "../http/cartHttp";
import {getProductsForCart} from "../http/productHttp";
import CartProduct from "../components/cart/CartProduct";
import CartProductsRowDesc from "../components/cart/CartProductsRowDesc";
import {recalcCartFinalPrice} from "../utils/cart/RecalcCartFinalPrice";
import {countTotalProducts} from "../utils/product/CountTotalProducts";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Banner from '../components/Banner';
import ConfettiComponent from '../components/Confetti';
import Footer from '../components/Footer';

const CartPage = observer(() => {

    const {user, cart} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)

        getAllFromCartByUserId(user.user.userId).then(async data => {

            if (data.count < 1) return;

            await cart.setCartTotalProductsCount(countTotalProducts(data.rows))

            await getProductsForCart(data.rows.reduce(
                (res, row) => [...res, row.productId], []), data?.rows[0]?.cartId).then(data => cart.setCartProducts(data))

            await cart.setFinalPrice(recalcCartFinalPrice(data.rows))

            await changeCartFinalPrice(user.user.userId, cart.finalPrice)

        }).finally(() => setIsLoading(false))
    }, [cart.cartTotalProductsCount])

    if (isLoading) {
        return (
            <div className="loading-block">
                <Spinner className="loading" animation="grow" variant="dark"/>
            </div>
        )
    }

    if (!cart?.cartTotalProductsCount) {
        return <div className="cart-data-info">Your cart is empty</div>
    }

    return (
     
             <div style={{marginTop:'2%',marginBottom:'5%',alignItems:'center',marginleft:'25%'}}>
           
            <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <ConfettiComponent />
       <div class="container" style={{marginLeft:'5%'}}>
              
               <div class=" d-flex align-items-center">
                   <div class="text-align-left align-self-center" style={{marginLeft:'40%'}}>         
                   <h2 style={{ fontFamily:'serif', fontSize:'60px',marginBottom:'3%',marginTop:'3%'}}>Your Cart:</h2>
                   </div>
               </div>
           </div>
        </div>
            <Container style={{marginLeft:'7%'}}>
                <CartProductsRowDesc/>
                <Row md={1}>
                    {cart.cartProducts.map((product) => (
                        <CartProduct
                            key={product.id}
                            product={product}
                        />
                    ))}
                </Row>
                <div className="final-price-content">In total: <br/><strong>{cart.finalPrice}$</strong></div>
                <Link
                    to="/order/"
                    className="btn btn-outline-dark go-to-order-btn"
                >
                    Make an order
                </Link>
            </Container>
            <Footer/>
        </div>
    );
});

export default CartPage;