import React, {useContext, useEffect, useState} from 'react';
import {getProduct} from "../http/productHttp";
import {useParams} from "react-router-dom";
import {Spinner} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getAllProductComments} from "../http/commentHttp";
import '../static/DetailPage.css'
import DeleteProductModal from "../components/product/DeleteProductModal";
import DetailBody from "../components/product/DetailBody";
import Banner from '../components/Banner';
import Banner2 from '../components/Banner copy';
import {Card} from "react-bootstrap";
import ConfettiComponent from '../components/Confetti';

const DetailPage = observer(() => {

    const {product} = useContext(Context)
    const productId = useParams().id

    const [currentProduct, setCurrentProduct] = useState('')
    const [showDeleteProductModal, setShowDeleteProductModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getProduct(productId).then(data => {
            setCurrentProduct(data)
        })
    }, [])

    useEffect(() => {
        getAllProductComments(productId).then(data => {
            product.setComments(data)
        }).finally(() => setIsLoading(false))
    }, [product.commentsNum])

    const closeDeleteProductModalHandler = () => {
        setShowDeleteProductModal(false)
    }

    const openDeleteProductModalHandler = () => {
        setShowDeleteProductModal(true)
    }

    if (isLoading) {
        return ( <div className="loading-block">
            <Spinner className="loading-spinner" animation="grow" variant="dark"/>
        </div>)
    }

    return (
        <> <div style={{marginTop:'2%',marginBottom:'5%',alignItems:'center'}}>
       <ConfettiComponent/>
       <Banner2/>
       <DeleteProductModal
                show={showDeleteProductModal}
                closeProductModalHandler={closeDeleteProductModalHandler}
                productId={productId}
            />
        <div className="detail__block detail" style={{}}>
        <Card className="create-product-card" style={{ width: '80rem' , alignItems:'center',marginLeft:'-22%',height:'70%'}}>
            <DetailBody
                currentProduct={currentProduct}
                openDeleteModalHandler={openDeleteProductModalHandler}
            />
        </Card>
        </div>
        </div>
        
        </>
    );
});

export default DetailPage;