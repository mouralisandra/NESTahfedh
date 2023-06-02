import React, { useContext, useEffect, useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { deleteOrder } from '../http/orderHttp';
import { createCategory } from '../http/categoryHttp';
import { deleteProduct } from '../http/productHttp';
import { deleteUser } from '../http/userHttp';
import UsersTable from '../components/admin/users/UsersTable';
import OrdersTable from '../components/admin/orders/OrdersTable';
import CreateCategoryForm from '../components/admin/CreateCategoryForm';
import DeleteItemModal from '../components/admin/DeleteItemModal';
import ProductsTable from '../components/admin/products/ProductsTable';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Carousel from '../components/Carousel';

const AdminPage = observer(() => {
  const { admin } = useContext(Context);

  const [showDeleteItemModal, setShowDeleteItemModal] = useState(true);

  const createCategoryHandler = async (category, categoryDescription) => {
    await createCategory({ value: category, description: categoryDescription });
  };

  const deleteItemHandler = async () => {
    if (admin.currentItem.type === 'user') {
      const res = await deleteUser(admin.currentItem.id);
      res.status === 200 ? admin.setUsers([]) : console.log(res);
      admin.setCurrentItem({});
    } else if (admin.currentItem.type === 'order') {
      const res = await deleteOrder(admin.currentItem.id);
      res.status === 200 ? admin.setOrders([]) : console.log(res);
      admin.setCurrentItem({});
    } else if (admin.currentItem.type === 'product') {
      const res = await deleteProduct(admin.currentItem.id);
      res.id ? await admin.setProducts([]) : console.log(res);
      await admin.setCurrentItem({});
    }
  };

  const deleteItemModalShow = async () => {
    await setShowDeleteItemModal(!showDeleteItemModal);
  };

  useEffect(() => {
    deleteItemModalShow();
  }, [admin.currentItem]);


  return (
    <div style={{marginTop:'2%',marginBottom:'5%',alignItems:'center',marginleft:'25%'}}>
            <Row className="justify-content-center">
            <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
       
       <div class="container" style={{marginLeft:'5%'}}>
              
               <div class=" d-flex align-items-center">
                   <div class="text-align-left align-self-center" style={{marginLeft:'40%'}}>         
                   <h2 style={{ fontFamily:'serif', fontSize:'60px',marginBottom:'3%',marginTop:'3%'}}>Admin Dashboard:</h2>
                   </div>
               </div>
           </div>
        </div>
           </Row>
       

        <Row className="justify-content-center">
        <Col lg={3} style={{marginTop:'-5%',width:'50%'}}>
          <img style={{marginRight:'-5%'}} src="/tohfa.png"></img>
        </Col>

        <Col lg={8}style={{marginRight:'-20%',marginTop:'0%'}}>
          <Col lg={8}>
          <div className="orders-table-header">            
            <h2 style={{ fontFamily:'serif', fontSize:'25px'}}>Add a Category:</h2></div>
           

            <div className="create-category-form">
             
              <CreateCategoryForm createCategory={createCategoryHandler} />
            </div>
            
          </Col>
          <Col lg={8}>
          <div className="orders-table-header">            
            <h2 style={{ fontFamily:'serif', fontSize:'20px'}}>The List of Users:</h2></div>
         
            <UsersTable />
          </Col>
          <Col lg={8}>
            <div className="orders-table-header">            
            <h2 style={{ fontFamily:'serif', fontSize:'20px'}}>The History of Orders:</h2></div>
          
            <OrdersTable />
          </Col>
          <Col lg={8}>
          <div className="orders-table-header">            
            <h2 style={{ fontFamily:'serif', fontSize:'20px'}}>The List of Products:</h2></div>
          
            <ProductsTable />
          </Col>
        </Col>
        </Row>
   
   
      <DeleteItemModal show={showDeleteItemModal} deleteItemHandler={deleteItemHandler} />
    </div>
  
  );
});

export default AdminPage;
