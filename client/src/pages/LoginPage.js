import React, {useState} from 'react';
import {login} from "../http/userHttp";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {findLoginDataError} from "../utils/auth/ValidateLoginData";
import LoginForm from "../components/auth/LoginForm";
import Banner4 from '../components/Banner4';
import Banner2 from '../components/Banner3';
import Carousel from '../components/Carousel';
import {Card} from "react-bootstrap";



const LoginPage = observer(() => {

    const {user} = useContext(Context)

    const [errors, setErrors] = useState({})
    const [validated, setValidated] = useState(false)

    const loginHandler = async (e, email, password) => {
        e.preventDefault()
    
        const validateData = await findLoginDataError(email, password)
    
        if (Object.keys(validateData).length) {
            setValidated(true)
            setErrors(validateData)
        } else {
            setValidated(false)
            const data = await login({email, password})
    
            if (data && data['err']) {
                setErrors({...errors, message: data['err'].message})
            } else if (data) {
                const {iat, exp, ...userData} = data
                user.setUser(userData)
                user.setIsAuth(true)
            } else {
                // handle the case when data is undefined
                console.log("Data is undefined");
            }
        }
    }

    return (
       
       
         
           <div style={{alignItems:'center', alignSelf:'center'}}>
             <Banner2/>
      <div className="row">
        <div className="col-md-6" >
           <section style={{marginTop:'15%',marginLeft:'20%',marginBottom:'5%', fontFamily:'serif'}}>
            <Carousel />
            </section>
        </div>
        <div className="col-md-6" style={{marginTop:'%',marginLeft:'-5%'}}>
            <h1 style={{marginTop:'10%',marginLeft:'5%',marginBottom:'-5%', fontFamily:'serif', fontSize:'50px'}}>Login To NESTahfedh</h1>
          <Card className="create-product-card" style={{ fontFamily:'serif',fontSize:'35px',width: '40rem' , alignItems:'center',marginLeft:'-30%'}}>
            
          <LoginForm loginHandler={loginHandler} errors={errors} validated={validated} />
          </Card>
        </div>
      </div>
    </div>

    );
});

export default LoginPage;