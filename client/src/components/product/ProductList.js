import React, {useContext} from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
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
const ProductList = observer(() => {

    const {product} = useContext(Context)

    return (
        <Row xs={2} md={4} className="g-4">
            {product.products.length && product.products.map((product) => (
                <Col key={product.id} lg={3}>
                    <ProductCard product={product}/>
                </Col>
            ))
            }
        </Row>
    );
});

export default ProductList;