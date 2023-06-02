import React from 'react';
import {Card, Container, Spinner} from "react-bootstrap";
import {useState} from "react";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import OrderProduct from "../components/order/OrderProduct";
import {useEffect} from "react";
import {getAllFromCartByUserId} from "../http/cartHttp";
import {recalcCartFinalPrice} from "../utils/cart/RecalcCartFinalPrice";
import OrderProductsRowDesc from "../components/order/OrderProductsRowDesc";
import {createOrder} from "../http/orderHttp";
import {useNavigate} from "react-router-dom";
import {findOrderDataErrors} from "../utils/order/ValidateOrderData";
import CreateOrderForm from "../components/order/CreateOrderForm";
import Carousel from '../components/Carousel';


const OrderPage = observer(() => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [finalPrice, setFinalPrice] = useState(0)
    const [errors, setErrors] = useState({})
    const [validated, setValidated] = useState(false)
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        await setLoading(true)
        await getAllFromCartByUserId(user.user.userId).then(data => {
            setFinalPrice(recalcCartFinalPrice(data.rows))
            setProducts(data.rows)
        })
        await setLoading(false)
    }

    const sendCreateData = async (firstName, lastName, phone, address, comment, deliveryType) => {

        const validatedData = await findOrderDataErrors(firstName, lastName, phone, address, comment, deliveryType)

        if (Object.keys(validatedData).length) {
            setValidated(true)
            setErrors(validatedData)
        }
        else {
            setValidated(false)
            const data = await createOrder({
                firstName,
                lastName,
                phone,
                address,
                comment,
                deliveryType,
                userId: user.user.userId
            })

            if (data.err) {
                setValidated(true)
            } else {
                navigate(`/`)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return (
            <div className="loading-block">
                <Spinner className="loading-spinner" animation="border" variant="dark"/>
            </div>
        )
    }

    if (!products.length) return <div className="cart-data-info">your cart is empty</div>

    return (
            <div style={{marginTop:'2%',marginBottom:'5%',alignItems:'center',marginleft:'25%'}}>
       
       <div id="template-mo-zay-hero-carousel" >
  
  <div class="container" style={{marginLeft:'5%'}}>
         
          <div class=" d-flex align-items-center">
              <div class="text-align-left align-self-center" style={{marginLeft:'40%'}}>         
              <h2 style={{ fontFamily:'serif', fontSize:'60px',marginBottom:'3%',marginTop:'3%'}}>Order Product: </h2>
              </div>
          </div>
      </div>
      <OrderProductsRowDesc/>
      {products.map(product => (
                    <OrderProduct key={product.id} cartProduct={product}/>
                ))}
       <div className="row">
        <div className="col-md-4">
          <img src="/lamp.jpg" alt="Image" style={{ width: '100%', height: '100%' }} />
        </div>
            <Card className="col-md-5 create-product-card" style={{display:'flex',float:'',marginLeft:'-25%'}}>
               
               
                    <CreateOrderForm
                        validated={validated}
                        errors={errors}
                        finalPrice={finalPrice}
                        sendCreateData={sendCreateData}
                    />
            </Card>
</div>
        </div>
        </div>
    );
});

export default OrderPage;