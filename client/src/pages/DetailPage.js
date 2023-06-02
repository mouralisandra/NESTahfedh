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
        <> <div style={{marginTop:'2%',marginBottom:'5%',alignItems:'center',marginleft:'25%'}}>
       
        <div id="template-mo-zay-hero-carousel" >
   
   <div class="container" style={{marginLeft:'5%'}}>
          
           <div class=" d-flex align-items-center">
               <div class="text-align-left align-self-center" style={{marginLeft:'40%'}}>         
               <h2 style={{ fontFamily:'serif', fontSize:'60px',marginBottom:'3%',marginTop:'3%'}}>Product Details: </h2>
               </div>
           </div>
       </div>
    </div>
   
            <DeleteProductModal
                show={showDeleteProductModal}
                closeProductModalHandler={closeDeleteProductModalHandler}
                productId={productId}
            />
        <div className="detail__block detail" style={{marginLeft:'25%'}}>
            <DetailBody
                currentProduct={currentProduct}
                openDeleteModalHandler={openDeleteProductModalHandler}
            />
        </div>
        <Banner2/>
        </div>
        </>
    );
});

export default DetailPage;