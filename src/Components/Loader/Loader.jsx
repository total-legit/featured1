import React,{useEffect,useState} from 'react';
import style from './Loader.module.css';
import {FaShippingFast,FaFacebookF,FaGoogle} from 'react-icons/fa'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {IoMdCash} from 'react-icons/io'
import  Backdrop  from '../Backdrop/Backdrop';
import Shop from './shopping.jpg'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Loader = ({login,history}) =>{
    useEffect(()=>{ 
        console.log(history)

        const x = document.getElementById("back")
        x.addEventListener("click", scrollListener);

        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
          x.removeEventListener("click", scrollListener);
        };
    
    },[])

    const scrollListener=()=>{
        login("off")
    }
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Sign In'
      });
      const { email, password1, textChange } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
    
      const sendGoogleToken = tokenId => {
        axios
          .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
            idToken: tokenId
          })
          .then(res => {
            console.log(res.data);
            informParent(res);
          })
          .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
          });
      };
      const informParent = response => {
        authenticate(response, () => {
          isAuth() && isAuth().role === 'admin'
            ? history.push('/admin')
            : history.push('/');
        });
      };
    
      const sendFacebookToken = (userID, accessToken) => {
        axios
          .post(`${process.env.REACT_APP_API_URL}/facebooklogin`, {
            userID,
            accessToken
          })
          .then(res => {
            console.log(res.data);
            informParent(res);
          })
          .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
          });
      };
      const responseGoogle = response => {
        console.log(response);
        sendGoogleToken(response.tokenId);
      };
    
      const responseFacebook = response => {
        console.log(response);
        sendFacebookToken(response.userID, response.accessToken)
      };
    
      
    
      const handleSubmit = e => {
        console.log(process.env.REACT_APP_API_URL);
        e.preventDefault();
        if (email && password1) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`${process.env.REACT_APP_API_URL}/login`, {
              email,
              password: password1
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Submitted'
                });
                isAuth() && isAuth().role === 'admin'
                  ? history.push('/admin')
                  : history.push('/');
                toast.success(`Hey ${res.data.user.firstName}, Welcome back!`);
              });
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Sign In'
              });
              console.log(err.response);
              toast.error("Couldn't Log in,Please try again.");
            });
        } else {
          toast.error('Please fill all fields');
        }
      };
     

return (<div style={{zIndex:'2000'}}><Backdrop/><div className="loader">
<ToastContainer/>
<div className={style.login}>
  <div className={style.loginleft}>
    <div className={style.sideImg}>
    <img width="100%" style={{objectFit:"cover",position:"relative"}} height="100%" src={Shop}></img>
      <div className={style.overlay}/>
       <div className={style.sideImgText}>
        <div style={{fontWeight:"500",fontSize:"25px"}}>Get Access to you order,</div>
        <div>Wishlist and recommendation</div>
        </div>
    <div className={style.BottomImage}>
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
      <span class="close" className={style.close} onClick={()=>login("off")}>&times;</span>
    
      <div className={style.register}>
        <div className={style.haveaccount}>Don't have an account?</div>
      <div className={style.registerBtn}>
        <Link exact to="/register" style={{color:'white',fontSize:"15px"}}>Get Started</Link>
      </div> 
      </div>
      <div className={style.signinconatiner}>
      <div className={style.Signin}>
        <div className={style.signinTitle}>
            Sign in to Limitless
        </div>
        <div style={{marginTop:'20px'}}>
            Enter your details below
        </div>
        <div style={{marginTop:'10px',fontSize:'12px'}}>
            Mobile No or Email address 
        </div>
        
        <div style={{marginTop:'10px',fontSize:'12px'}}>
            <input className="inputEmail"  onChange={handleChange('email')}
                  value={email}
              ></input> 
        </div>
        <div style={{marginTop:'10px',fontSize:'12px',display:'flex',flexDirection:'row'}}>
            Password <div style={{marginBottom:'-6px',marginLeft:'60%',fontSize:'10px'}}><Link to="/users/password/forget">Forgot Password?</Link></div>
        </div>
        
        <div style={{marginTop:'10px',fontSize:'12px'}}>
            <input className="inputEmail"        onChange={handleChange('password1')}
                  value={password1} type="password"
           ></input> 
        </div>
        
        <div className={style.rememberme} >
        <input type="checkbox" id="rememberme" name="rememberme" value="rememberme"/>  Remember Me 
        </div>
        <div style={{marginTop:'20px'}}>
          <div className="loginbtn"     onClick={handleSubmit}
             >Log In</div>
        </div>
        <div className={style.facegoogle}>
        <div className={style.loginwith}>
            Or Login with 
        </div>
      
        <div style={{marginTop:'20px',display:'flex',flexDirection:'row'}}>
        <FacebookLogin
                  appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
                  autoLoad={false}
                  callback={responseFacebook}
                  render={renderProps => (
                    <div style={{marginRight:'20px',cursor:'pointer'}}       onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
              >
                    <FaFacebookF size="25px"/>
                    </div>
                            )}
                />

        <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  render={renderProps => (
                    <div  style={{cursor:'pointer'}}     onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
              > <FaGoogle size="25px"/>
                    </div>
                                  )}
                ></GoogleLogin>
        </div>
        </div>
        </div>
     </div>
</div>
</div></div>)
}

export default Loader;