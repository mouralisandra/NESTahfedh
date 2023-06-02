import React, { useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Context } from '../index';
import { createProduct } from '../http/productHttp';
import { getAllCategories } from '../http/categoryHttp';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { findCreateProductErrors } from '../utils/product/ValidateCreateProductData';
import CreateProductForm from '../components/product/CreateProductForm';
import Carousel from '../components/Carousel';

const CreatePage = observer(() => {
  const { user, product } = useContext(Context);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const sendCreateData = async (imgEvent, img, title, description, price, categoryId) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('img', img);
    formData.append('categoryId', categoryId);
    formData.append('userId', user.user.userId);

    const validatedData = await findCreateProductErrors(imgEvent, title, description, price, categoryId);

    if (Object.keys(validatedData).length) {
      setValidated(true);
      setErrors(validatedData);
    } else {
      setValidated(false);
      const data = await createProduct(formData);

      if (data['err']) {
        setErrors({ ...errors, message: data['err'].message });
      } else {
        navigate(`/product/${data.id}`);
      }
    }
  };

  useEffect(() => {
    getAllCategories().then(data => {
      product.setCategories(data);
    });
  }, []);

  return (
    <div style={{alignItems:'center', alignSelf:'center'}}>
      <div className="row">
        <div className="col-md-6" >
           <section style={{marginTop:'15%',marginLeft:'20%',marginBottom:'-5%', fontFamily:'serif'}}>
            <Carousel />
            </section>
        </div>
        <div className="col-md-6" style={{marginTop:'%',marginLeft:'-5%'}}>
            <h1 style={{marginTop:'5%',marginLeft:'5%',marginBottom:'-5%', fontFamily:'serif', fontSize:'70px'}}>Create a new Product</h1>
            <h2 style={{marginTop:'5%',marginLeft:'5%',marginBottom:'-10%', fontFamily:'serif', fontSize:'60px'}}>Impress your clients !</h2>
          <Card className="create-product-card" style={{ width: '40rem' , alignItems:'center',marginLeft:'-30%',height:'70%'}}>
            
            <CreateProductForm validated={validated} errors={errors} sendCreateData={sendCreateData} />
          </Card>
        </div>
      </div>
    </div>
  );
});

export default CreatePage;
