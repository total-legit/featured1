import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import {RiSearch2Line,RiShoppingCartLine,RiUserAddLine,RiHeartLine,RiUser3Line} from 'react-icons/ri'
import {HiOutlineShoppingBag,HiHeart} from 'react-icons/hi'
import Bottle from './liquor.png'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Logo from './Logo.png'
import { ToastContainer, toast } from 'react-toastify';
import {updateUser, isAuth, getCookie,signout} from '../helpers/auth'
const Header =({login,history})=>{
    var hours = new Date().getHours();
    const [usersState,setUserState]=useState()
    const [time,setTime]=useState()
    
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password1: '',
    textChange: 'Update',
    role: ''
  });

    useEffect(()=>{
        if(hours>17){
            setTime("Good Evening")
        }
        else if(5<hours<12){
            setTime("Good Morning")
        
        }
        else if(hours>12){
            setTime("Good Afternoon")
        
        }
        else{
            setTime("Hello")
         
        }
        if(isAuth()){
        loadProfile();
        }
    },[])

    const loadProfile = () => {
        const token = getCookie('token');
        axios
          .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => {
            const { role, firstName, email } = res.data;
            setFormData({ ...formData, role, firstName, email });
          })
          .catch(err => {
            toast.error(`Error To Your Information ${err.response.statusText}`);
            if (err.response.status === 401) {
              signout(() => {
                history.push('/login');
              });
            }
          });
      };
    const userSignout=()=>{
        signout(()=>{
            window.location.reload(false)
        })
    }
    return(
        <div className={styles.container}>
            <ToastContainer/>
    <div className={styles.tophead} >

         <img className={styles.logo} src={Logo} />
        <div className={styles.search}>
    
            <input className={styles.input} placeholder="Search Limitlessly.." ></input>
        <div>
            <button className={styles.btn}><RiSearch2Line size='25px'/></button>
        </div>
        </div>
        <div>
            <button className={styles.login}>
               <div className={styles.cartText}>Cart</div>
               <HiOutlineShoppingBag size='29px'/>
                
            </button>
        </div>
        
        <div>
            <button className={styles.login2}>
               <HiHeart size='29px'/>
                
               
            </button>
        </div>
        <div>
           {isAuth()?
            
            <button className={styles.userBtn} >
            <div><div><div style={{fontSize:'12px',marginBottom:'4px'}}>{time},</div></div>{formData.firstName}</div>
             <RiUser3Line size='29px'/>   
             <nav className={styles.userDropdown}>
           <ul className={styles.subMenu}>
               <li className={styles.subMenuItem}>
                Profile   
               </li>
               
               <li className={styles.subMenuItem} onClick={userSignout}>
                Sign Out   
               </li>
            </ul>
            </nav>
                
            </button>
            
           : <button className={styles.cart} onClick={()=>login("On")}>
           
           <div><div><div style={{fontSize:'12px',marginBottom:'4px'}}>{time},Customer</div></div>Login/Register</div>
            <RiUserAddLine size='29px'/>   
               
           </button>
            }
        </div>
  <Link to="/liquor">
   <div className={styles.imgDiv}>
   <img src={Bottle} className={styles.imageBottle}></img>
   </div>
    
   </Link>
    </div> 


<div className={styles.category}>
        <ul className={styles.listt}>
         <Link to="/">  <li >
                Home            
            </li>
        </Link>
            <li >
                Electronics
            </li>
            <li >
                Home & Living
            </li>
            <li >
                Mens Fashion
            </li>
            <li >
                Womens Fashion
            </li>
            
            <li >
                Sports & Outdoor
            </li>
            
            <li >
                Groceries
            </li>
        </ul>
</div>  
        </div>
    )
}

export default Header;