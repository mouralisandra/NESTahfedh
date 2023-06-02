import React, {memo} from 'react';
import {Col, Row} from "react-bootstrap";
import styled from "styled-components";
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
const CartProductsRowDesc = memo(() => {
    return (
        <div>
            <ImageContainer>
            <Row md={6}>
            
                <Col className="cart-table-img">
                    <div>
                        Image
                    </div>
                </Col>
               
                <Col className="cart-table-title">
                    <div>
                        Title
                    </div>
                </Col>
                <Col className="cart-table-price">
                    <div>
                        Price
                    </div>
                </Col>
                <Col className="cart-table-category">
                    <div>
                        Category
                    </div>
                </Col>
                <Col className="cart-table-quantity">
                    <div>
                        Quantity
                    </div>
                </Col>
            </Row>
            </ImageContainer>
        </div>
    );
});

export default CartProductsRowDesc;