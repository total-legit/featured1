import React,{useState,useEffect} from 'react'
import styles from './Featured.module.css'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {MdVisibility} from 'react-icons/md'
import {Link} from 'react-router-dom'
const Featured=({id})=>{
    
    const [Items,setItems]=useState([{"name":"Fashion","price":"RS 1200","rating":"","type":"New Arrival","img":"https://mosaic04.ztat.net/vgs/comet/VA/21/5B/00/0Q/12/VIDEO/PREVIEW_IMG/1590684482918.jpg"},{"name":"Mens Fashion","price":"RS 1200","rating":"","type":"New Arrival","img":"https://www.style97.com/wp-content/uploads/2019/06/shirtfloral.jpg"},{"name":"Womens Fashion","price":"RS 1200","rating":"","type":"New Arrival","img":"https://5.imimg.com/data5/TO/DO/MY-66863550/fiaa291mrn_1-500x500.jpg"},{"name":"Mens Fashion","price":"RS 1200","rating":"","type":"New Arrival","img":"https://images.asos-media.com/products/vans-old-skool-sneakers-in-yellow/9503858-1-yellow?$XXL$&wid=513&fit=constrain"},{"name":"Pants","price":"RS 1200","rating":"","type":"New Arrival","img":"https://ae01.alicdn.com/kf/HTB1ewrMMXXXXXbVXFXXq6xXFXXXT/Pre-Sale-Men-Dress-Pants-Slim-Fit-Casual-Grey-Plaid-Formal-Pant-Fashion-Suit-Trousers-Man.jpg_640x640.jpg"},{"name":"Men's Fashion","img":"https://i.pinimg.com/736x/4a/91/a6/4a91a6b4f09c7df99a6352db06f7a701.jpg"}])
    useEffect(()=>{
        if(id=="category"){
            setItems([{"name":"Men's Fashion","img":"https://i.pinimg.com/736x/4a/91/a6/4a91a6b4f09c7df99a6352db06f7a701.jpg"},{"name":"Women's Fashion","img":"https://i.pinimg.com/originals/5f/9a/27/5f9a2734e8bd8dff4a9d527a455bb404.jpg"},{"name":"Groceries","img":"https://www.sactownmag.com/Blog/2020/CSA-Boxes-Spring-2020/ProduceExpress_saladkit.jpg"},{"name":"Accessories","img":"https://i.pinimg.com/originals/e2/0a/60/e20a6095397f46de675e51c4c10a7fe8.jpg"},])
        }
        
    
    },[])
    
    if(id=="category"){
        var cardStyle=styles.slider2
        var imgSize=styles.slideimg2
    }
    else{
        var cardStyle=styles.slider
        var imgSize=styles.slideimg
    }
        const mouseover=(a)=>{
            const x=document.getElementById(id+"img");
            
        }
    
    const clickListener=(a)=>{
        
        const x= document.getElementById(id)
        
        if(a=="r"){
                x.scrollBy({
                    top:0,
                    left:+250,
                    behavior:'smooth'
                })
                }   
             else{
                x.scrollBy({
                    top:0,
                    left:-250,
                    behavior:'smooth'
                })
              }
    }
return(<div className={styles.container}>
     <div className={styles.header}>
        {id}
    </div> 
    <div className={styles.head}>
    <FaArrowCircleLeft className={styles.Barrow} onClick={()=>clickListener("l")}/>
    <div id={id} className={styles.productContainer}>
  {Items.map((itm)=>(
    <section className={cardStyle}>
	<ul id="autoWidth" className={styles.cshidden}>
	{/* <!--1------------------------------------>	 */}
  <li className={styles.itema} style={{listStyleType:"none"}}>
{/* <!--box-slider---------------> */}
	<div className={styles.box}>
	
    {/* <!--img-box----------> */}
	<Link to={{
          pathname:`/product/${itm.name}`, 
    }}>
    <div id={id+"img"} className={imgSize} onMouseOver={()=>mouseover()}>
    <img  alt="1" src={itm.img}/>
   {(id=="category")?<div className={styles.textImg}>
    <div className={styles.textTitle}>{itm.name} </div>
   </div>:<div></div>
}
    {/* <!--overlayer----------> */}
	<div className={styles.overlay}>
	
    {/* <!--buy-btn------>	 */}
  <a href="#" className={styles.buybtn}>{(id!="category")?<div>Buy Now</div>:<div>{itm.name}</div>}</a>	
	</div>
	</div>
    </Link>
	  {/* <!--detail-box--------->  */}
  {(id!="category")? 
	<div >
    <div className={styles.detailbox}>
	{/* <!--type--------> */}
	
	<div className={styles.type}>
	<a href="#">{itm.name}</a>
	<div style={{position:"relative"}}>
    <span  >{itm.type}</span>
    <div className={styles.wishDiv}>
    
        <div style={{marginRight:'5px'}}>
          <div className={styles.itm1} >  <FaRegHeart size="20px"/> </div>
        </div>

        <div style={{marginRight:'5px'}} >
          <div className={styles.itm2} >  <AiOutlineShoppingCart size="20px"/> </div>
        </div> 
        
        <div style={{marginRight:'5px'}}>
          <div className={styles.itm3} >  <MdVisibility size="20px"/> </div>
     </div>
         
   </div>   
  
    </div>
	</div>
	<a href="#" className={styles.price}>{itm.price}</a>
		
    </div>
      </div>
        :<div></div>}
	 </div>		
</li>
	
</ul>
</section>))}
</div>
<div className={styles.Farrow}>
<FaArrowCircleRight className={styles.Farrow} onClick={()=>clickListener("r")} />
</div>
</div>
</div>)
}

export default Featured;