import React,{useEffect,useState} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu ,SidebarHeader, SidebarFooter,SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styles from './Admin.module.css'
import Shop from '../Loader/shopping.jpg'
import Logo from '../Header/Logo.png'
import { NavLink } from 'react-router-dom';
const Admin=()=>{
    return(
    <div className={styles.container} >
<div>
     <ProSidebar image={Shop} 
      breakPoint="md"
      className={styles.sidebar}
     >
     <SidebarHeader>
     <div className={styles.header}>    
    <img src={Logo} width="100%"/>
   </div>
   </SidebarHeader>

   <SidebarContent>
   <Menu iconShape="square">
    <MenuItem ><NavLink exact to='/admin'>Dashboard</NavLink></MenuItem>
    <SubMenu title="Products" >
      <MenuItem  ><NavLink activeStyle= {
                {color: '#ffaa3b',
                fontWeight: 700,
            }} exact to='/admin/product/add'>Add Products</NavLink></MenuItem>
      <MenuItem >All Products</MenuItem>
    </SubMenu>
    <SubMenu title="Orders" >
      <MenuItem >Pending Orders</MenuItem>
      <MenuItem>Completed Orders</MenuItem>
    </SubMenu>
    </Menu>
  </SidebarContent>
  
  <SidebarFooter>
  <div style={{fontFamily:'calibri',letterSpacing:'2px'}} className={styles.header}>    
   Powered By:<br/>
 Black Tech Pvt. Ltd.
   </div>
        
  </SidebarFooter>
</ProSidebar>
</div>
  </div>
    )
}

export default Admin