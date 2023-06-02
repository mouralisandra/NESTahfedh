import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import PaginationBasic from '../components/product/Pagination';
import SideBar from '../components/utills/SideBar';
import CatalogSettings from '../components/utills/CatalogSettings';
import ProductList from '../components/product/ProductList';
import { getProducts } from '../http/productHttp';
import { getAllCategories } from '../http/categoryHttp';
import { findMinMaxPrice } from '../utils/product/findMinMaxPrice';
import Type from "./Type";
import Banner from '../components/Banner';
import ConfettiComponent from '../components/Confetti';
import Showcase from '../components/sections/Showcase';

const ShopPage = observer(() => {
  const { product } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories().then(data => product.setCategories(data));
    getProducts(
      product.limit,
      product.offset,
      null,
      product.searchInput,
      product.selectedPricing,
      product.sortOrderVars[product.selectedSortOrder]
    ).then(async data => {
      await product.setProducts(data?.rows);
      await product.setTotalRecords(data?.count);
      await product.setSelectedPricing(await findMinMaxPrice(data.rows));
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getProducts(
      product.limit,
      product.offset,
      product.selectedCategory.id,
      product.searchInput,
      product.selectedPricing,
      product.sortOrderVars[product.selectedSortOrder]
    ).then(async data => {
      await product.setProducts(data.rows);
      await product.setTotalRecords(data.count);
      await setLoading(false);
    });
  }, [
    product.page,
    product.selectedCategory,
    product.selectedSortOrder,
    JSON.stringify(product.selectedPricing),
    product.searchInput,
  ]);

  if (loading) {
    return (
      <div className="loading-block">
        <Spinner className="loading-spinner" animation="border" variant="dark" />
      </div>
    );
  }

  return (
    <div style={{alignItems:'center', alignSelf:'center'}} >
 <ConfettiComponent />
 <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
         <section class=" py-5">
           
       
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
            <div class="text-align-center align-self-center">          <div className="text-center" style={{fontFamily: 'serif', fontSize: '70px',display:'flex',float:'right' }}>
          <Type />
          </div>
    </div> 
        </div>
    </div>
    </section>
    </div>
      <div className="row" style={{alignItems:'center', alignSelf:'center',marginLeft:'5%'}}>
        <div className="col-lg-12">
          <div className="products-block__body products-body">
            <div className="products-body__content">
            <div class="card-body">
              <SideBar />
              {product?.products?.length ? (
                <ProductList />
              ) : (
                <div className="no-products-block">
                  <h1 className="no-products-h1">No products</h1>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
       <div className="row">
        <div className="col-lg-12">
          {product?.products?.length && (
            <div className="products-body__pagination">
              <PaginationBasic />
            </div>
          )}
        </div>
        <Banner></Banner>
      </div>
      
 </div>
    
   
  );
});

export default ShopPage;
