import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './ForgetPw.module.css'
import {FaShippingFast,FaFacebookF,FaGoogle} from 'react-icons/fa'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {IoMdCash} from 'react-icons/io'
import {Link,Redirect} from 'react-router-dom';
import Shop from './shopping.jpg'

const ForgetPw=({match})=>{
    const [formData, setFormData] = useState({
        email: '',
        textChange: 'Submit'
      });
      const { email, textChange } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (email) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .put(`${process.env.REACT_APP_API_URL}/forgotpassword`, {
              email
            })
            .then(res => {
              
                setFormData({
                  ...formData,
                  email: '',
                });
                toast.success(`Please check your email`);
              
            })
            .catch(err => {
            console.log(err.response)
              toast.error(err.response.data.error);
            });
        } else {
          toast.error('Please fill all fields');
        }
      };
      

    return(
        <div style={{zIndex:'2000'}}><div className="loader">
        <ToastContainer draggable={false} className="toast" closeButton={false} limit={1} />
   
  <div className="login">
  <div className="sideImg">
      <img width="100%" style={{objectFit:"cover",position:"relative"}} height="100%" src={Shop}></img>
        <div className="overlay"/>
         <div className="sideImgText">
          <div style={{fontWeight:"500",fontSize:"25px"}}>Get Access to you order,</div>
          <div>Wishlist and recommendation</div>
          </div>
      <div className="BottomImage">
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginRight:'20px'}}>
              <div style={{color:'white'}}><FaShippingFast color="white" size="22px"/></div>
              <div style={{fontSize:'12px'}}>Free Shipping</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginRight:'20px'}}>
              <div style={{color:'white'}}><IoMdCash color="white" size="22px"/></div>
              <div style={{fontSize:'12px'}}>Cash on Delivery</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginRight:'20px'}}>
              <div style={{color:'white'}}><RiSecurePaymentLine color="white" size="22px"/></div>
              <div style={{fontSize:'12px'}}>Secure Payment</div>
          </div>
     
      </div>
      </div>
    
  {/*    
  <span class="close"     >&times;</span> */}
      <div className="register">
          <div style={{marginRight:'12px'}}>Already have access?</div>
      <div className='registerBtn'>
          <Link exact to="/" style={{color:'white',fontSize:"15px"}}>Sign in</Link>
      </div> 
    
      </div>
      <div className="signinconatiner">
    
      <div className="Signin">
    
          <div className="signinTitle">
              Don't worry,<br/>
              It's Quick and Easy
          
          </div>
        
          <div style={{marginTop:'20px'}}>
              Enter your email below
          </div>
        
          
          <div style={{marginTop:'10px',fontSize:'12px'}}>
              <input placeholder="Email Id"
                onChange={handleChange('email')}
                value={email}
                type="email"
               className="inputEmail"></input> 
          </div>
          
          
        
        
          <div style={{marginTop:'20px'}}>
            <div className="loginbtn" onClick={handleSubmit}>Submit</div>
          </div>
         
     
      </div>
      </div>
  </div>
  </div></div>
  
        )
}
export default ForgetPw