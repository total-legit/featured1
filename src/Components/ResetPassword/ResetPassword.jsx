import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {FaShippingFast,FaFacebookF,FaGoogle} from 'react-icons/fa'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {IoMdCash} from 'react-icons/io'
import {Link,Redirect} from 'react-router-dom';
import Shop from './shopping.jpg'

const ResetPassword = ({match,history}) => {
    const [formData, setFormData] = useState({
        password1: '',
        password2: '',
        token: '',
      textChange: 'Submit'
    });
      const { password1, password2, textChange, token } = formData;
      
      useEffect(() => {
          let token = match.params.token
          if(token) {
              setFormData({...formData, token,})
          }
          
      }, [])
    const handleChange = text => e => {
      setFormData({ ...formData, [text]: e.target.value });
    };
      const handleSubmit = e => {
      e.preventDefault();
      if ((password1 === password2) && password1 && password2) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .put(`${process.env.REACT_APP_API_URL}/resetpassword`, {
              newPassword: password1,
              resetPasswordLink: token
          })
          .then(res => {
              setFormData({
                ...formData,
                 password1: '',
                password2: ''
              });
              toast.success(res.data.message);
              history.push('/')
          })
          .catch(err => {
            toast.error('Something is wrong try again');
          });
      } else {
        toast.error('Passwords don\'t matches');
      }
    };
    return (
        <div style={{zIndex:'2000'}}><div className="loader">
        <ToastContainer draggable={false} className="toast" closeButton={false} limit={1} />
   
  <div className="login">
    <div className="forgetleft">
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
              Just One step away,<br/>
              
          
          </div>
        
          <div className='enter' style={{marginTop:'20px'}}>
              Enter your new password below
          </div>
        
          
          
          <div style={{marginTop:'10px',fontSize:'12px'}}>
            <input placeholder="Password"
              onChange={handleChange('password1')}
              type="password"
              value={password1}
            className="inputEmail"></input> 
        </div>
        <div style={{marginTop:'10px',fontSize:'12px'}}>
            <input placeholder="Retype Password"
              onChange={handleChange('password2')}
              value={password2}
              type="password"
            className="inputEmail"></input> 
        </div>
      
        
        
          <div style={{marginTop:'20px'}}>
            <div className="loginbtn" onClick={handleSubmit}>Submit</div>
          </div>
         
     
      </div>
      </div>
  </div>
  </div></div>
  
   );
  };
  
  export default ResetPassword;
  