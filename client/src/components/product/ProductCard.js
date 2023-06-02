import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import styled from "styled-components";
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
      transform: translateY(-2rem) scale(1.01);
    }
  }

  @media (max-width: 30em) {
    width: 100vw;
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
    padding: 1rem;
  }
`;


const ProductCard = observer(({product}) => {

    return (
        <Item>
        <Card style={{border:'0'}}>
            <Card.Body>
                <ImageContainer> 
                <Card.Img height={200} variant="dark" src={process.env.REACT_APP_GET_IMG + '/' + product.img}/>
                </ImageContainer>
                <Card.Title>{product.title.length > 10 ? `${product.title.substring(0, 10)}...` : product.title}</Card.Title>
                <Card.Text>
                    {product.description.length > 30 ? `${product.description.substring(0, 30)}...` : product.description}
                </Card.Text>
                <Card.Text><strong>{product.price}$</strong></Card.Text>
                <Link key={product.id} to={`/product/${product.id}`} className='btn btn-dark'>Show</Link>
            </Card.Body>
        </Card>
        </Item>
    );
});

export default ProductCard;