import React, {useContext, useState} from 'react';
import {Button, Container, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import Comment from "../comment/Comment";
import {addToCart} from "../../http/cartHttp";
import {Context} from "../../index";
import AddToCartToast from "./AddToCartToast";
import styled from "styled-components";

const DetailBody = ({currentProduct, openDeleteModalHandler}) => {

    const {user, cart} = useContext(Context)

    const [show, setShow] = useState(false)

    const addToCartShowHandler = async () => {
        await setShow(true)
        setTimeout(() => setShow(false), 1000)
    }

    const addToCartHandler = async () => {
        await addToCart(currentProduct.id, currentProduct.price, user.user.userId)
        await cart.setCartTotalProductsCount(-1)
        await addToCartShowHandler()
    }
    const Item = styled.div`
    width: calc(20rem - 4vw);
    padding: 1rem 0;
    color: ${(props) => props.theme.body};
    margin: 2rem 1rem;
    position: relative;
    z-index: 5;
  
    backdrop-filter: blur(4px);
  
    border: 2px solid ${(props) => props.theme.text};
    border-radius: 20px;
  
    &:hover {
      img {
        transform: translateY(-2rem) scale(1.2);
      }
    }
  
    @media (max-width: 30em) {
      width: 70vw;
    }
  `;
  const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;
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
       
        <Container >
            <div className="detail__row">
                <div className="detail__column">
                    <div className="detail__item">
                        <ImageContainer>
                        <div className="detail__img">
                            <Image
                                width={463}
                                height={347}
                                variant="dark"
                                src={process.env.REACT_APP_GET_IMG + '/' + currentProduct.img}
                            />
                        </div>
                        </ImageContainer>
                    </div>
                </div>
                <div className="detail__column">
                    <div className="detail__item__title">
                        <div className="detail__title">
                            {currentProduct.title}
                        </div>
                        <div className="detail__cart__btn">
                            <Button className="detail__add__to__cart" onClick={addToCartHandler}
                                    variant="outline-dark" size="lg">Add to cart</Button>
                        </div>
                    </div>
                </div>
                <AddToCartToast show={show} />
                <div className="detail__column">
                    <div className="detail__information">
                        <div className="detail__item">
                            <div className="characteristic__title">
                                Characteristic
                            </div>
                            <div className="characteristic">
                                <div className="characteristic__row">
                                    <div className="characteristic__column">
                                        <div className="category__label">
                                            category
                                        </div>
                                        <div className="category__value">
                                            {currentProduct?.category?.value}
                                        </div>
                                    </div>
                                    <div className="characteristic__column">
                                        <div className="price__label">
                                            price
                                        </div>
                                        <div className="price__value">
                                            {currentProduct.price}$
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block__description">
                <div className="description__title">
                    Description
                </div>
                <div className="description__title">
                    {currentProduct.description}
                </div>
                {
                    currentProduct.userId === user.user.userId &&
                    <div className="card-button-manage" sty>

                        <Link
                            to={`/product-update/${currentProduct.id}/`}
                            className='btn btn-dark'
                            key={currentProduct.id}
                            state={currentProduct}
                            style={{marginRight: '50px'}}
                        >
                            Update
                        </Link>

                        <Button
                            onClick={openDeleteModalHandler}
                            className='btn-dark'
                            style={{marginRight: '10px'}}
                        >
                            Delete
                        </Button>
                    </div>
                }
                 <Comment style={{marginTop:'-40%'}} productId={currentProduct.id}/>
       
            </div>
            </Container>
    );
};

export default DetailBody;