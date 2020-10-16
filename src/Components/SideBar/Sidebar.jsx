import React, { useEffect } from 'react'
import styles from './Sidebar.module.css'
const Sidebar=()=>{
    useEffect(()=>{
         // initiate the event handler
    window.addEventListener("scroll", scrollListener);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener("scroll", scrollListener);
    };
      
    },[])
    const scrollListener=()=>{
        const x =document.getElementById("sidebarcontainer")
        const y =document.getElementById('colouredFooter')
        
        const { left, top, width, height } = y.getBoundingClientRect();
        const wheight = window.innerHeight;
        if((window.scrollY>=50)&&(top>wheight)){
            x.style.display="block"
        }
        else{
            x.style.display="none"
       
        }
    }
   

    return(
        <div id="sidebarcontainer" className={styles.container}>
            <div style={{margin:'0px'}}>
            <ul style={{margin:'0px',padding:'0px',listStyleType:"none",paddingInlineStart:"0px",marginBlockStart:"0px",marginBlockEnd:'0px' ,width:'100%',height:'100%'}}>
            <li id="sd1" className={styles.sidemenu}>
                   Liquor <div style={{marginLeft:'12px'}}></div>
                </li>
                <li id='sd2' className={styles.sidemenu}>
                    Fashion <div style={{marginLeft:'12px'}}>/</div>
                </li>
                <li id="sd3" className={styles.sidemenu}>
                    Electronics <div style={{marginLeft:'12px'}}>/</div>
                </li>
                <li id="sd5" className={styles.sidemenu}>
                    Furniture <div style={{marginLeft:'12px'}}>/</div>
                </li>
        
                <li id='sd4' className={styles.sidemenu}>
                    Groceries <div style={{marginLeft:'12px'}}>/</div>
                </li>   
            </ul>
            </div>
        </div>
    )
}
export default Sidebar;