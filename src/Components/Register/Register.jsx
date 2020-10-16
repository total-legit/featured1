import React,{useState} from 'react'
import {FaShippingFast,FaFacebookF,FaGoogle} from 'react-icons/fa'
import './Loader.css'
import {RiSecurePaymentLine} from 'react-icons/ri'
import {IoMdCash} from 'react-icons/io'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth } from '../helpers/auth';
import {Link,Redirect} from 'react-router-dom';
import Shop from './shopping.jpg';
import Select from 'react-select'
import DatePicker from 'react-date-picker';

const Regster=()=>{
    const [value, onChange] = useState(new Date());
   const [selectedOption,setSelectedOption]=useState()
   const [selectedDistrictOption,setSelectedDistrictOption]=useState()
   
   const [StateselectedOption,setStateSelectedOption]=useState()

   const [options,setOptions] = useState([
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' },
      ])
      const [Stateoptions,setStateOptions] = useState([
        { value: 'Province 1', label: 'Province 1' },
        { value: 'Province 2', label: 'Province 2' },
        { value: 'Bagmati Province', label: 'Bagmati Province' },
        { value: 'Gandaki Province', label: 'Gandaki Province' },
        { value: 'Province 5', label: 'Province 5' },
        { value: 'Karnali Province', label: 'Karnali Province' },
        { value: 'Sudurpaschchim Province', label: 'Sudurpaschchim Province' },
    ])
    const [districtOptions,setDistrictOptions]=useState([])
  
    const [formData, setFormData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        password1: '',
        password2: '',
        phone:'',
        dob:'',
        gender:'',
        state:'',
        district:'',
        addressLine:'',
        textChange: 'Sign Up'
      });
   
      const { firstName,lastName, email, password1, password2,phone,dob,gender,state,district,addressLine, textChange } = formData;
      const handleInputChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
        console.log(process.env)
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (firstName && lastName && email && password1) {
          if (password1 === password2) {
            setFormData({ ...formData, textChange: 'Submitting' });
            axios
              .post(`${process.env.REACT_APP_API_URL}/register`, {
                firstName,
                lastName,
                email,
                password: password1,
                phone,
                dob,
                gender,
                state,
                district,
                addressLine
              })
              .then(res => {
                setFormData({
                  ...formData,
                  firstName: '',
                  email: '',
                  password1: '',
                  password2: '',
                  phone:'',
                  dob:'',
                  gender:'',
                  state:'',
                  district:'',
                  addressLine:'',
                  textChange: 'Submitted'
                });
    
                toast.success(res.data.message);
                alert("Please Check Your Mail to activate your account")
              })
              .catch(err => {
                setFormData({
                  ...formData,
                  name: '',
                  email: '',
                  password1: '',
                  password2: '',
                  phone:'',
                  dob:'',
                  gender:'',
                  state:'',
                  district:'',
                  addressLine:'',
                  textChange: 'Sign Up'
                });
                console.log(err.response);
                toast.error("Couldn't Register");
              });
          } else {
            toast.error("*Passwords don't match");
          }
        } else {
          toast.error('*Please fill all fields');
        }
      };
    
      const handleDate=e=>{
          onChange(e);
          setFormData({ ...formData, ['dob']: e });
    
      }

      const  handleChange = selectedOption => e => {
        setSelectedOption(e);
        console.log(e.value)
         setFormData({ ...formData, [selectedOption]: e.value });
    
      };
      const  handleChangeState = e=> selectedOption => {
        setStateSelectedOption( selectedOption );
        console.log(selectedOption.value)
            
            if(selectedOption.value=="Province 1") { 
                setDistrictOptions(prov1);
            }
            
           else if(selectedOption.value=="Province 2") { setDistrictOptions(prov2);
            
          
        }
            
           else if(selectedOption.value=="Bagmati Province") { setDistrictOptions(prov3);
            }
            
           else if(selectedOption.value=="Gandaki Province") { setDistrictOptions(prov4);
            }
            
           else if(selectedOption.value=="Province 5") { setDistrictOptions(prov5);
            }
            
           else if(selectedOption.value=="Karnali Province") { setDistrictOptions(prov6);
            }
           
            else if(selectedOption.value=="Sudurpaschchim Province") { setDistrictOptions(prov7);
            }
            else{
                setDistrictOptions()
            }

            setFormData({ ...formData, [e]: selectedOption.value });
    
      };
      const  handleChangeDistrict = selectedOption => e => {
        setSelectedDistrictOption( e );
        setFormData({ ...formData, [selectedOption]: e.value });
    
      };
   
      const prov1=[
        { value: 'Bhojpur', label: 'Bhojpur' },
        { value: 'Khotang', label: 'Khotang' },
        { value: 'Sankuwashabha', label: 'Sankuwashabha' },
        { value: 'Dhankuta', label: 'Dhankuta' },
        { value: 'illam', label: 'illam' },
        { value: 'Jhapa', label: 'Jhapa' },
        { value: 'Okhaldhunga', label: 'Okhaldhunga' },
        { value: 'Morang', label: 'Morang' },
        { value: 'Panchthar', label: 'Panchthar' },
        { value: 'Solukhumbu', label: 'Solukhumbu' },
        { value: 'Sunsari', label: 'Sunsari' },
        { value: 'Taplejung', label: 'Taplejung' },
        { value: 'Tehrathum', label: 'Tehrathum' },
        { value: 'Udaypur', label: 'Udaypur' },
      
      ]
      const prov2=[ { value: 'parsa', label: 'Parsa' }, { value: 'Bara', label: 'Bara' }, { value: 'Rautahat', label: 'Rautahat' }, { value: 'Sarlahi', label: 'Sarlahi' }, { value: 'Dhanusa', label: 'Dhanusa' }, { value: 'Siraha', label: 'Siraha' }, { value: 'Mahottari', label: 'Mahottari' }, { value: 'Saptari', label: 'Saptari' }]
      const prov3=[ { value: 'Sindhuli', label: 'Sindhuli' }, { value: 'Ramechhap', label: 'Ramecchap' }, { value: 'Dolakha', label: 'Dolakha' }, { value: 'Bhaktapur', label: 'Bhaktapur' }, { value: 'Dhading', label: 'Dhading' }, { value: 'Kathmandu', label: 'Kathmandu' }, { value: 'Kavepalanchok', label: 'Kavrepalanchok' }, { value: 'Lalitpur', label: 'Lalitpur' }, { value: 'Nuwakot', label: 'Nuwakot' }, { value: 'Rasuwa', label: 'Rasuwa' }, { value: 'Sindhupalchok', label: 'Sindhupalchok' }, { value: 'Chitwan', label: 'Chitwan' }, { value: 'Makwanpur', label: 'Makwanpur' }]
      const prov4=[ { value: 'Baglung', label: 'Baglung' }, { value: 'Gorkha', label: 'Gorkha' }, { value: 'Kaski', label: 'Kaski' }, { value: 'Lamjung', label: 'Lamung' }, { value: 'Manang', label: 'Manang' }, { value: 'Myagdi', label: 'Myagdi' }, { value: 'Nawalpur', label: 'Nawalpur' }, { value: 'Parbat', label: 'Parbat' }, { value: 'Syangja', label: 'Syangja' }, { value: 'Tanahu', label: 'Tanahu' }]
      const prov5=[ { value: 'Kapilvastu', label: 'Kapilvastu' }, { value: 'Parasi', label: 'Parasi' }, { value: 'Rupandehi', label: 'Rupandehi' }, { value: 'Argakhanchi', label: 'Argakhanchi' }, { value: 'Gulmi', label: 'Gulmi' }, { value: 'Palpa', label: 'Papla' }, { value: 'Dang', label: 'Dang' }, { value: 'Pyuthan', label: 'Pyuthan' }, { value: 'Rolpa', label: 'Rolpa' }, { value: 'Eastern Rukum', label: 'Eastern Rukum' }, { value: 'Banke', label: 'Banke' }, { value: 'Bardiya', label: 'Bardiya' }]
      const prov6=[ { value: 'Western Rukum', label: 'Western Rukum' }, { value: 'Salyan', label: 'salyan' }, { value: 'Dolpa', label: 'dolpa' }, { value: 'Humla', label: 'Humla' }, { value: 'Jumla', label: 'Jumla' }, { value: 'Kalikot', label: 'Kalikot' }, { value: 'Mugu', label: 'Mugu' }, { value: 'Surkhet', label: 'Surkhet' }, { value: 'Dailekh', label: 'Dailekh' }, { value: 'Jajarkot', label: 'Jajarkot' }]
      const prov7=[ { value: 'Dhangadi', label: 'Dhangadi' }, { value: 'Achham', label: 'Achham' }, { value: 'Doti', label: 'Doti' }, { value: 'Bajhang', label: 'Bajhang' }, { value: 'Kanchanpur', label: 'Kanchanpur' }, { value: 'Dadeldhura', label: 'Dadeldhura' }, { value: 'Baitadi', label: 'Baitadi' }, { value: 'Darchula', label: 'Darchula' }]

return(<div style={{zIndex:'2000'}}><div className="loader">
      {isAuth() ? <Redirect to='/' /> : null}
      <ToastContainer draggable={false} className="toast" closeButton={false} limit={1} />
 
<div className="login">
<div className='registerleft'>
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
        <div className='already'>Already have an account?</div>
    <div className='registerBtn'>
        <Link exact to="/" style={{color:'white',fontSize:"15px"}}>Sign in</Link>
    </div> 
  
    </div>
    <div className="signinconatiner">
  
    <div className="Signin">
  
        <div className="signinTitle">
            Get Started with Limitless,<br/>
            It's Quick and Easy
        
        </div>
      
        <div className='enter' style={{marginTop:'20px'}}>
            Enter your details below
        </div>
        <div style={{marginTop:'10px',fontSize:'12px',display:"flex",flexDirection:'row'}}>
            <input placeholder="First Name" 
                 onChange={handleInputChange('firstName')}
                 value={firstName}
            
            className="inputName"></input> 
            <input placeholder="Last Name" 
              onChange={handleInputChange('lastName')}
              value={lastName}
             className="inputName"></input> 
        
        </div>
      
        
        <div style={{marginTop:'10px',fontSize:'12px'}}>
            <input placeholder="Email Id"
              onChange={handleInputChange('email')}
              value={email}
              type="email"
             className="inputEmail"></input> 
        </div>
        
        <div style={{marginTop:'10px',fontSize:'12px'}}>
            <input placeholder="Password"
              onChange={handleInputChange('password1')}
              type="password"
              value={password1}
            className="inputEmail"></input> 
        </div>
        <div style={{marginTop:'10px',fontSize:'12px'}}>
            <input placeholder="Retype Password"
              onChange={handleInputChange('password2')}
              value={password2}
              type="password"
            className="inputEmail"></input> 
        </div>
        
        <div style={{marginTop:'10px',fontSize:'12px'}}>
            <input placeholder="Mobile No"   onChange={handleInputChange('phone')}
                  value={phone}
                  type="number"
                className="inputEmail" ></input> 
        </div>
       <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{flex:6}}>
        <div style={{marginTop:'10px',fontSize:'14px',display:'flex',flexDirection:'row'}}>
            Birthday </div>
            <div style={{marginTop:'10px',fontSize:'12px'}}>
            <DatePicker className="datePicker" 
        value={value} 
        onChange={handleDate}
       />         
        </div>
        </div>
        <div style={{flex:6}}>
        <div style={{marginTop:'10px',fontSize:'14px',display:'flex',flexDirection:'row'}}>
            Gender </div>
            <div style={{marginTop:'10px',fontSize:'12px'}}>
            <Select value={selectedOption}
        
      onChange={handleChange('gender')}
        options={options}/>
        </div>
        
        </div>
      </div>
      <div className='addressline' style={{fontSize:'14px',display:'flex',flexDirection:'row'}}>
            Address Line </div>
         <div className='stateselect' style={{fontSize:'12px',display:"flex",flexDirection:'row',width:'100%'}}>
         <div style={{marginTop:'10px',fontSize:'12px',flex:4}}>
            <Select value={StateselectedOption}
        
        options={Stateoptions}
            onChange={handleChangeState('state')}
                  />
        </div>
        <div style={{marginTop:'10px',fontSize:'12px',flex:4}}>
            <Select value={selectedDistrictOption}
             onChange={handleChangeDistrict('district')}
        options={districtOptions}/>
        </div>
        <div style={{marginTop:'10px',fontSize:'12px',flex:4}}>
        <input placeholder="Location"className="inputEmail"
             onChange={handleInputChange('addressLine')}
             value={addressLine}
        
        ></input> 
       
        </div>
        
        </div>
      
      
        <div >
          <div className="loginbtn" onClick={handleSubmit}>Sign Up</div>
        </div>
    
        <div className='fagoo'>
            Or Sign up with 
        
      
        <div className='fagooinside'>
       
          <FaFacebookF  size="25px"/>
         
         <div> <FaGoogle className='FaGoogle' size="25px"/>
         </div>
         </div>
         </div>
        </div>
   
    </div>
    </div>
</div>
</div>
)

}

export default Regster