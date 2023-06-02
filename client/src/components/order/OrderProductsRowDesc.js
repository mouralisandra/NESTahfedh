import React from 'react';
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
const OrderProductsRowDesc = () => {

    return (
        <ImageContainer>
            <Row md={6}>
                <Col className="order-img-col">
                    <div>
                        Image
                    </div>
                </Col>
                <Col className="order-title-col">
                    <div>
                        Title
                    </div>
                </Col>
                <Col className="order-price-col">
                    <div>
                        Price
                    </div>
                </Col>
                <Col className="order-category-col">
                    <div>
                        Category
                    </div>
                </Col>
                <Col className="order-quantity-col">
                    <div>
                        Quantity
                    </div>
                </Col>
            </Row>
        </ImageContainer>
    );
};

export default OrderProductsRowDesc;