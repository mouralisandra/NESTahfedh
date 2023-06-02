import React, {useState} from 'react';
import {login, register} from "../http/userHttp";
import {useNavigate} from "react-router-dom";
import {findRegisterDataError} from "../utils/auth/ValidateRegisterData";
import RegisterForm from "../components/auth/RegisterForm";
import {useContext} from "react";
import {Context} from "../index";
import Banner2 from '../components/Banner3';
import Carousel from '../components/Carousel';
import {Card} from "react-bootstrap";



const RegisterPage = () => {

    const navigate = useNavigate();
    const {user} = useContext(Context)

    const [errors, setErrors] = useState({})
    const [validated, setValidated] = useState(false)

    const registerHandler = async (e, email, password, username) => {

        e.preventDefault()

        const validateData = await findRegisterDataError(email, username, password)

        if (Object.keys(validateData).length) {
            setValidated(true)
            setErrors(validateData)
        }
        else {
            const res = await register({email, username, password})
            setValidated(false)
            const data = await login({email, password})
            const {iat, exp, ...userData} = data
            user.setUser(userData)
            user.setIsAuth(true)
            navigate('/')
        }
    }
    return (
          
        <div style={{alignItems:'center', alignSelf:'center'}}>
        <Banner2/>
 <div className="row">
   <div className="col-md-6" >
      <section style={{marginTop:'15%',marginLeft:'20%',marginBottom:'-5%', fontFamily:'serif'}}>
       <Carousel />
       </section>
   </div>
   <div className="col-md-6" style={{marginTop:'%',marginBottom:'5%',}}>
       <h1 style={{marginTop:'10%',marginLeft:'5%', fontFamily:'serif', fontSize:'50px'}}>Register To NESTahfedh</h1>
     <Card className="create-product-card" style={{ fontFamily:'serif',fontSize:'35px',width: '40rem' , alignItems:'center',marginLeft:'-30%'}}>
       
     <RegisterForm
                   registerHandler={registerHandler}
                   errors={errors}
                   validated={validated}
               />
     </Card>
   </div>
 </div>
</div>
    );
};

export default RegisterPage;