import React, {useContext, useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import {changeCartProductQuantity, deleteFromCart} from "../../http/cartHttp";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import styled from 'styled-components';
const product = observer(({product}) => {

    const {cart} = useContext(Context)
    const [qty, setQty] = useState(product?.cartProduct[0]?.quantity)

    const [increaseBtnDisabled, setIncreaseBtnDisabled] = useState(false)
    const [decreaseBtnDisabled, setDecreaseBtnDisabled] = useState(false)

    const deleteProductFromCart = async () => {
        await deleteFromCart(product.cartProduct[0].id).then(() => cart.setCartTotalProductsCount(0))
    }

    const increaseQty = async () => {
        setIncreaseBtnDisabled(true)
        await changeCartProductQuantity(product.cartProduct[0].id, qty + 1, product.price).then(data => {
            setQty(data.quantity)
            cart.setCartTotalProductsCount(cart.cartTotalProductsCount + 1)
        })
        setIncreaseBtnDisabled(false)
    }

    const decreaseQty = async () => {
        setDecreaseBtnDisabled(true)
        if (qty > 1) await changeCartProductQuantity(product.cartProduct[0].id, qty - 1, product.price)
            .then(data => {
                setQty(data.quantity)
                cart.setCartTotalProductsCount(cart.cartTotalProductsCount - 1)
            })
        setDecreaseBtnDisabled(false)
    }
    const ImageContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.carouselColor};
    border: 1px solid ${(props) => props.theme.text};
    padding: 1rem;
    
    border-radius: 20px;
    cursor: pointer;
    
    img {
      width: 100%;
      height: auto;
      transition: all 0.3s ease;
    }
    `;
    return (
        <ImageContainer> 
            <Row style={{marginTop: 20}} md={7}>
                <Col>
                    <div className="cart-img-container">
                        <ImageContainer>
                        <Image className="cart-img" height={120} width={150}
                               src={process.env.REACT_APP_GET_IMG + '/' + product.img}></Image>
                  </ImageContainer>
                    </div>
                </Col>
                <Col className="cart-title-col">
                    <p>{product.title}</p>
                </Col>
                <Col className="cart-price-col">
                    <p>{product.price}</p>
                </Col>
                <Col className="cart-category-col">
                    <p>{product?.category?.value}</p>
                </Col>
                <Col className="cart-quantity-col">
                    <p>{qty}</p>
                    <Row>
                        <Col>
                            <Button
                                style={{width: 30}}
                                size="sm"
                                className="btn-dark"
                                onClick={increaseQty}
                                disabled={increaseBtnDisabled}
                            >
                                +
                            </Button>
                            <Button
                                style={{width: 30}}
                                size="sm"
                                className="btn-dark"
                                onClick={decreaseQty}
                                disabled={decreaseBtnDisabled}
                            >
                                -
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div>
                <Button onClick={deleteProductFromCart} className="btn-dark delete-from-cart-btn">Delete</Button>
            </div>
            <hr/>
      </ImageContainer>
    );
});

export default product;